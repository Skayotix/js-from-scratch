# js-from-scratch
Training on js, folowing the [verekia][]'s [tutorial][].

## Tools explaination reminder

### Production

|Name       |Modules           |Description
|-----------|:----------------:|-----------
|Express    |`express`         |Popular web application framework for Node
|ImmutableJS|`immutable`       |Enable to manipulate immutable collections
|           |`compression`     |Express middleware to activate Gzip compression on the server
|React      |`react`           |Library for building user interfaces by Facebook.
|           |`react-dom`       |React document manipulation
|           |`react-hot-loader`|Enabler HMR to work with React
|           |`react-redux`     |Connects a Redux store with React components
|Redux      |`redux`           |Handle the lifecycle of the application
|           |`redux-action`    |Redux actions

### Development

|Name     |Modules                            |Description
|---------|:---------------------------------:|-----------
|Babel    |`babel-cli`                        |JS Transpiler of ES6 code (and other things like React's JSX syntax)
|         |`babel-core`                       |peer-dependency of `babel-loader`
|         |`babel-eslint`                     |Package to enable ESLint *to rely on Babel's parser* instead of its own
|         |`babel-jest`                       |Package to make Jest use Babel
|         |`babel-loader`                     |Plugin for Webpack that transpiles the code that will end up running in the browser
|         |`babel-plugin-flow-react-proptypes`|Automatically generates PropTypes from Flow annotations
|         |`babel-preset-env`                 |Configurations for the most recent ECMAScript features supported by Babel
|         |`babel-preset-flow`                |Preset for Babel to understand Flow annotations
|         |`babel-preset-react`               |Preset for Babel to understand JSX
|cross-env|`cross-env`                        |Enable to pass environment variable to our PM2 binary regardless the platform
|ESLint   |`eslint`                           |The linter of choice for ES6 code
|         |`eslint-config-airbnb`             |Config created by Airbnb<br/>`npx install-peerdeps --dev eslint-config-airbnb`
|         |`eslint-plugin-flowtype`           |ESLint plugin to lint Flow annotations
|Flow     |`flow-bin`                         |A static type checker by Facebook
|Husky    |`husky`                            |Git Hook
|Jest     |`jest`                             |A JavaScript testing library by Facebook
|Nodemon  |`nodemon`                          |Utility to automatically restart Node server when file changes happen in the directory|
|PM2      |`pm2`                              |Process Manager for Node, keeps your processes alive in production
|RimRaf   |`rimraf`                           |A neat simple package to delete files with cross platform support
|Webpack  |`webpack`                          |A module bundler
|         |`webpack-cli`                      |Command line interface
|         |`webpack-dev-server`               |Hot Module Reloadin in development mode

## Redux reminder

### Hello Action

```JavaScript
const sayHello = createAction(SAY_HELLO)
```

Register an action for the type `SAY_HELLO`.

```JavaScript
const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHello('Hello!')) },
})
```

Register onClick event (Button's prop `handleClick`) to trigger action with content as payload.

### Hello Reducer

#### Function declaration

```JavaScript
const helloReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SAY_HELLO:
      return state.set('message', action.payload)
    default:
      return state
  }
}
```

Declare reducer that handle redux ractions. This one will read the type of the action and, in case of `SAY_HELLO` action, it will manipulate states.

### Store Creation

```JavaScript
const store = createStore(combineReducers({ hello: helloReducer }),
  // eslint-disable-next-line no-underscore-dangle
  isProd ? undefined : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
```

Conbine reducedr with state.

---------------------------------------------------------

[verekia]:  https://github.com/verekia "Verakia GitHub page"
[tutorial]: https://github.com/verekia/js-stack-from-scratch/#javascript-stack-from-scratch "JavaScript Stack from Scratch"