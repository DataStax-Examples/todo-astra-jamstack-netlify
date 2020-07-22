# JAMStack + Netlify + DataStax Astra + Apache Cassandra with React Router demo

This is a demo repository set up to a Serverless react based todo application
using a [DataStax Astra](https://astra.datastax.com/register) free tier database for storage in AWS. 

The project interacts directly with the database from the react based frontend application and can be deployed on Netlify for free with a few clicks.

## Pre-reqs

Create [DataStax Astra](https://astra.datastax.com/register) Cassandra database (free tier): 
    
  * To keep allow defaults to work name cluster and keyspace `tododemo` 

## Running locally

```bash
git clone https://github.com/phact/todo-astra-jamstack-netlify
cd todo-astra-jamstack-netlify
npm install
npm run build
npm run dev
```

### Using GitPod



### Running in Netlify



## Things of note:

 - The contents of this repo were based on [Jakes's port](https://github.com/tjake/todo-astra-react-serverless/) of the [TodoMVC code](https://github.com/tastejs/todomvc/tree/master/examples/react) originally written by [Pete Hunt](https://github.com/petehunt).
 - The Astra demo was modified from https://github.com/huksley/todo-react-ssr-serverless
 - Only the client webpack config is relevant for the JAMStack version
