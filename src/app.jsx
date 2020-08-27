import React from 'react';
import {renderRoutes} from 'react-router-config';
import TodoFooter from './footer';
import utils from './utils/utils';
import {Logo} from '../assets';
import {createTodo, deleteTodos, getTodos} from './utils/api';

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: null,
      newTodo: '',
      todos: [],
      loading: true,
    }
  }

  componentDidMount() {
    const sessionId = this.getSessionId();
    this.setState({loading: false, sessionId}, () => this.loadTodos());
  }

  getSessionId() {
    // Check if a session id query parameter exists
    const params = new URLSearchParams(window.location.search);
    if (params.get('session-id')) {
      return params.get('session-id');
    }

    // Check if a session id is stored to local storage
    if (utils.store('session-id')) {
      return utils.store('session-id');
    }

    // Otherwise, generate a new session id
    const sid = utils.uuid();
    utils.store('session-id', sid);
    return sid;
  }

  toggleLoadingStatus() {
    const {loading} = this.state;
    this.setState({loading: !loading});
  }

  async deleteTodos() {
    const {sessionId} = this.state;
    this.toggleLoadingStatus();
    await deleteTodos(sessionId);
    await this.loadTodos();
    this.toggleLoadingStatus();
  }

  async addTodo(todo) {
    const {sessionId} = this.state;
    this.toggleLoadingStatus();
    await createTodo(todo, sessionId);
    this.toggleLoadingStatus();
  }

  async loadTodos() {
    const {sessionId} = this.state;
    this.toggleLoadingStatus();
    const response = await getTodos(sessionId);
    this.setState({todos: !response.rows ? [] : response.rows});
    this.toggleLoadingStatus();
  }

  handleChange(event) {
    this.setState({newTodo: event.target.value});
  }

  async handleNewTodoKeyDown(event) {
    if (event.keyCode !== 13) return;
    event.preventDefault();

    const title = this.state.newTodo.trim();

    if (title) {
      await this.addTodo({
        title,
        id: utils.uuid(),
        completed: false,
      })
      await this.loadTodos();
      await this.setState({newTodo: ''});
    }
  }

  async toggleAll(event) {
    const {checked} = event.target;
    this.state.todos.map(async todo => {
      await this.addTodo(Object.assign(todo, {completed: checked}));
    })
    await this.loadTodos();
  }

  async toggle(todo) {
    await this.addTodo(Object.assign(todo, {completed: !todo.completed}));
    await this.loadTodos()
  }

  edit(todo) {
    this.setState({editing: todo.id});
  }

  async save(todo, text) {
    await this.addTodo(Object.assign(todo, {title: text}));
    await this.loadTodos();
    await this.setState({editing: null});
  }

  cancel() {
    this.setState({editing: null});
  }

  render() {
    const {todos, loading, sessionId, editing, newTodo} = this.state;
    const activeTodoCount = todos.reduce((accum, todo) => (todo.completed ? accum : accum + 1), 0);
    const completedCount = todos.length - activeTodoCount;

    return (
      <div>
        <header className="header">
          <h1>
            <img alt={'Logo'} src={Logo}/>
            Astra todos
            {loading ? <div className="spinner"/> : <span/>}
          </h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={newTodo}
            onKeyDown={(event) => this.handleNewTodoKeyDown(event)}
            onChange={(event) => this.handleChange(event)}
            autoFocus
          />
        </header>
        {todos && todos.length ?
          <section className="main">
            <input
              className="toggle-all"
              type="checkbox"
              onChange={this.toggleAll}
              checked={activeTodoCount === 0}
            />
            <ul className="todo-list">
              {
                renderRoutes(this.props.route.routes, {
                  todos,
                  onToggle: todo => this.toggle(todo),
                  onEdit: todo => this.edit(todo),
                  editing: todo => editing === todo.id,
                  onSave: (todo, text) => this.save(todo, text),
                  onCancel: () => this.cancel(),
                })
              }
            </ul>
          </section>
          :
          null
        }
        {activeTodoCount || completedCount ?
          <TodoFooter
            count={activeTodoCount}
            completedCount={completedCount}
            nowShowing={this.props.location.pathname}
            sessionId={sessionId}
            onDeleteTodos={() => this.deleteTodos()}
          />
          : null
        }
      </div>
    )
  }
}

export default TodoApp;
