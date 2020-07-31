# JAMStack + Netlify + Astra + Cassandra Example 📒
This is an example React To-Do application using a [DataStax Astra](https://astra.datastax.com/register) free tier database.

The project interacts directly with the database from the [ReactJS](https://reactjs.org/) frontend and can be deployed to [Netlify](https://www.netlify.com/) for free with a few clicks.

Contributor(s): [Sebastián Estévez](https://github.com/phact), based on the work of [Jake Luciani](https://github.com/tjake/todo-astra-react-serverless/)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/DataStax-Examples/todo-astra-jamstack-netlify) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DataStax-Examples/todo-astra-jamstack-netlify)

## Objectives
* Provide a fullstack development example using Astra as the storage backend

## How this works
Once the Astra credentials are provided, the necessary tables are created in the database. The webservice will be available on port 8080 once the application has been deployed.

[JAMstack](https://jamstack.org/) is a big leap forward in how we can write web applications that are easy to write, deploy, scale, and also maintain. Using this approach means that newly created content is rendered from a content API, while a static render of it is being built into the site for future.

Deploying a static web application on [Netlify](https://www.netlify.com/) allows us to reaps the benefits and not having to rely on our own webserver; it will also handle the Astra user credentials for us.

## Getting Started Paths:
1. [Run the app locally](#running-on-your-local-machine)
2. [Run the app on Gitpod](#running-on-gitpod)
3. [Deploy the app to Netlify](#deploying-to-netlify)

### Running on your local machine
1. Create a [DataStax Astra](https://astra.datastax.com/register) Cassandra database (free tier):
![image](https://user-images.githubusercontent.com/3254549/88737275-c938f080-d0ed-11ea-8273-f547da8ef9e6.png)
2. Click 'Use this template' at the top of the README:
![image](https://user-images.githubusercontent.com/3254549/88738196-161cc700-d0ee-11ea-9bd4-b5389b19f4bb.png)
3. Enter a repository name and click 'Create repository from template':
![image](https://user-images.githubusercontent.com/3254549/88738761-42384800-d0ee-11ea-82e8-a2cd085b6f83.png)
4. Clone the repository on your local machine:
![image](https://user-images.githubusercontent.com/3254549/88739059-6e53c900-d0ee-11ea-9b25-56b2436a9817.png)
5. `cd` to the cloned repository, and install Node dependencies: `npm install`.
6. Find the values for the Astra variables from the Astra database dashboard. One exception is the `ASTRA_DB_ID` variable. It is the string in the URL after `https://astra.datastax.com/org/`. Set `ASTRA_DB_USERNAME`, `ASTRA_DB_PASSWORD`, `ASTRA_DB_KEYSPACE`, `ASTRA_DB_ID`, and `ASTRA_DB_REGION` environment variables using the shell command `export <ENV_VAR_NAME>=<value>.
7. In the cloned repository, build the app: `npm start`.
8. Open http://localhost:8080 to view your application:
![image](https://user-images.githubusercontent.com/3254549/88739693-fdadac00-d0ef-11ea-9f95-d2ee643b5431.png)

### Running on Gitpod
1. Create a [DataStax Astra](https://astra.datastax.com/register) Cassandra database (free tier):
![image](https://user-images.githubusercontent.com/3254549/88737275-c938f080-d0ed-11ea-8273-f547da8ef9e6.png)
2. Click the 'Open in Gitpod link':

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/DataStax-Examples/todo-astra-jamstack-netlify)

3. Wait for your Gitpod workspace to start:
![image](https://user-images.githubusercontent.com/3254549/88744125-5171c280-d0fb-11ea-9676-de4589e42589.png)
4. Set your Astra credentials in the Gitpod terminal at the bottom of the screen:
![image](https://user-images.githubusercontent.com/3254549/88744148-64849280-d0fb-11ea-9b20-52d5226a14c6.png)
You can find your database id here:
![image](https://user-images.githubusercontent.com/3254549/88744238-a1508980-d0fb-11ea-83fc-6efc6b370780.png)
5. Click the 'Open browser' button in the bottom right of the screen:
![image](https://user-images.githubusercontent.com/3254549/88744346-ebd20600-d0fb-11ea-9853-cf370dfcf143.png)
6. View your application:
![image](https://user-images.githubusercontent.com/3254549/88744380-04422080-d0fc-11ea-93a1-fe40854f428c.png)

### Deploying to Netlify
1. Create a [DataStax Astra](https://astra.datastax.com/register) Cassandra database (free tier):
![image](https://user-images.githubusercontent.com/3254549/88737275-c938f080-d0ed-11ea-8273-f547da8ef9e6.png)
2. Click the 'Deploy to Netlify' button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DataStax-Examples/todo-astra-jamstack-netlify)

3. Connect your GitHub account:
![image](https://user-images.githubusercontent.com/3254549/88744656-d9a49780-d0fc-11ea-97ad-f05aa0ace11e.png)
4. Fill in the Netlify environment variables with information on your Astra environment:
![image](https://user-images.githubusercontent.com/3254549/88744704-fb9e1a00-d0fc-11ea-8d92-4182aed4499d.png)
You can find your database id here:
![image](https://user-images.githubusercontent.com/3254549/88744238-a1508980-d0fb-11ea-83fc-6efc6b370780.png)
5. Click 'Save and Deploy':
![image](https://user-images.githubusercontent.com/3254549/88744776-2c7e4f00-d0fd-11ea-8530-71e2a85e34a2.png)
6. Wait for your app to deploy:
![image](https://user-images.githubusercontent.com/3254549/88744798-3bfd9800-d0fd-11ea-8858-281bd0d4ff70.png)
7. Click your Netlify app link to view your live app:
![image](https://user-images.githubusercontent.com/3254549/88744822-4fa8fe80-d0fd-11ea-97dd-9f9611b332dc.png)
8. You've deployed your app to Netlify!
![image](https://user-images.githubusercontent.com/3254549/88744842-62233800-d0fd-11ea-8e20-29aa71027885.png)

### Things to Note:
 - The contents of this repo are based on [Jake's port](https://github.com/tjake/todo-astra-react-serverless/) of the [TodoMVC code](https://github.com/tastejs/todomvc/tree/master/examples/react) originally written by [Pete Hunt](https://github.com/petehunt).
 - The example is modified from https://github.com/huksley/todo-react-ssr-serverless.
