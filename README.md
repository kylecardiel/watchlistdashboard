# Watchlist Dashboard

This application allows a user to create a stick watchlist. Users can individuall add stock or index symbols.

## Technology

This application uses the MERN stack desgin (MongoDb, Express.js, React and Node.js)

#### Frontend Development

- [react](https://reactjs.org)
- [material-ui](https://material-ui.com)
- [lodash](https://lodash.com)
- [redux/react-redux](https://react-redux.js.org)
- [react-thunk](https://github.com/reduxjs/redux-thunk)
- [reselect](https://github.com/reduxjs/reselect)
- [styled-components](https://www.styled-components.com/)

##### Testing

- [jest](https://jestjs.io)
- [enzmye](https://airbnb.io/enzyme/)

#### Backend Development

- [express](https://expressjs.com)
- [mongodb](https://www.mongodb.com)
- [mongoose](https://mongoosejs.com/docs/)
- [concurrently](https://www.npmjs.com/package/concurrently)
- [axios](https://www.npmjs.com/package/axios)

## Setup

### Locally or codesandbox.io environment:
##### Locally
- Clone repo
- Navigate to your repo and install all dependencies
```
npm install
```
##### codesandbox.io
- create sandbox with from github repo, copy this repo link

### database
- Create a [mongodb](https://www.mongodb.com) database (you can do it in the cloud for free)
- Make sure when setting up db you whitelist your servers IP address
- Once db set up copy the connection link for your application and replace process.env.DATABASE_URL (server.js file: line 10) with your link. 


## Running the application
You can either start up the UI and backend server separately with:

Starting up backend server
```
npm run backend
```

Starting up UI server
```
npm run frontend
```

or with concurrently you can start both with:
```
npm run fullApp
```

Runs the app in the development mode.<br>
Open [localhost](http://localhost:3000) to view it in the browser.


## Running tests

- Run the ui project tests with:

```
npm test
```

## Features

#### Javascript

- Absolute Import Path
- Arrow Functions
- Event Handling
- Let/Const
- Object Deconstruction
- Promises
- Spread Operator
- String Interpolation

#### React

- State Management
- Higher Order Components
- React Hooks
