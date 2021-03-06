# js-from-scratch
Training on js, folowing the [verekia][]'s [tutorial][].

------------------------------------------------------------

## Tools explaination reminder

### Production

|Name       |Modules           |Description
|-----------|:----------------:|-----------
|Express    |`express`         |Popular web application framework for Node
|ImmutableJS|`immutable`       |Enable to manipulate immutable collections
|           |`compression`     |Express middleware to activate Gzip compression on the server
|Fetch      |`isomorphic-fetch`|Polyfill that makes `fetch()` work cross-browsers and in Node too!
|React      |`react`           |Library for building user interfaces by Facebook.
|           |`react-dom`       |React document manipulation
|           |`react-hot-loader`|Enabler HMR to work with React
|           |`react-jss`|CSS-in-JS library to write styles in JavaScript and inject them
|           |`react-redux`     |Connects a Redux store with React components
|           |`react-router`    |Declarative routing for React
|           |`react-router-dom`|
|Redux      |`redux`           |Handle the lifecycle of the application
|           |`redux-action`    |Redux actions
|           |`react-helmet`    |A library to inject content to the `<head>`
|           |`redux-thunk`     |Extend Redux's functionalities to allow action creators to return functions

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
|Mocker   |`fetch-mock`                       |Mock the `fetch()` function
|Flow     |`flow-bin`                         |A static type checker by Facebook
|Husky    |`husky`                            |Git Hook
|Jest     |`jest`                             |A JavaScript testing library by Facebook
|Nodemon  |`nodemon`                          |Utility to automatically restart Node server when file changes happen in the directory|
|PM2      |`pm2`                              |Process Manager for Node, keeps your processes alive in production
|Redux    |`redux-mock-store`                 |Mock the redux store
|RimRaf   |`rimraf`                           |A neat simple package to delete files with cross platform support
|Webpack  |`webpack`                          |A module bundler
|         |`webpack-cli`                      |Command line interface
|         |`webpack-dev-server`               |Hot Module Reloadin in development mode

## Redux reminder

### Hello Action

#### Action creation

```JavaScript
const sayHello = createAction(SAY_HELLO)
```

Register an action for the type `SAY_HELLO`.

#### Action call

```JavaScript
dispatch(sayHello('Hello!'))
```

This will trigger a `SAY_HELLO` action with `'Hello!'` as payload.

### Button Container

#### React component

##### Flow type

```JavaScript
type Props = {
  label: string,
  handleClick: Function,
}
```

##### Component

```jsx
const Button = ({ label, handleClick }: Props) => (
  <button type="button" onClick={handleClick}>
    {label}
  </button>
)
```

#### Containerization

```JavaScript
const mapStateToProps = () => ({
  label: 'Say hello',
})
```

Will set `label` prop to `"Say hello"` on state change.

```JavaScript
const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHello('Hello!')) },
})
```

Will set a dispach trigger.

```JavaScript
export default connect(mapStateToProps, mapDispatchToProps)(Button)
```

Will connect `mapStateToProp` and `mapDispatchToProps` to the `Button` react component and return a react component used as container.

### Message Container

#### React component

##### Flow type

```JavaScript
type Props = {
  message: string,
}
```

##### Component

```jsx
const Message = ({ message }: Props) => (
  <p>
    {message}
  </p>
)
```

#### Containerization

```JavaScript
const mapStateToProps = state => ({
  message: state.hello.get('message'),
})
```

Will set `meassage` to the hello state's `message` on state change

```JavaScript
export default connect(mapStateToProps)(Message)
```

Will connect `mapStateToProp` to the `Message` react component and return a react component used as container.

### Hello Reducer

#### Initial state

```JavaScript
const initialState = Immutable.fromJS({
  message: 'Initial reducer message',
})
```

Declaration of the initial state for the `helloReduce`.

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

Declare reducer that handle redux ractions. This one will read the type of the action and, in case of `SAY_HELLO` action, it will manipulate state linked to this reducer.

Function `helloReducer`:
- contains an inital state `state: Immut = initialState`
- contains a `switch` to process action type
- change the state in case of `SAY_HELLO` action

### Store Creation

```JavaScript
const store = createStore(combineReducers({ hello: helloReducer }),
  // eslint-disable-next-line no-underscore-dangle
  isProd ? undefined : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
```

Conbine reducer with state. Hereby reate a state `hello` managed by a `helloReducer`. The second argument enable the use of the redux devtools if the server is in dev mode and the navigator extention installed.

```jsx
const wrapApp = (AppComponent, reduxStore) =>
  <Provider store={reduxStore}>
    <AppContainer>
      <AppComponent />
    </AppContainer>
  </Provider>
```

Include app in the Hot Loader and in the store.

---------------------------------------------------------

## Small look about Docker

```JSon
{
  "storage-driver": "overlay2",
  "hosts": ["unix:///var/run/docker.sock", "tcp://0.0.0.0:2375"]
}
```

The crazy `daemon.json` I didn't reach to create.


[verekia]:  https://github.com/verekia "Verakia GitHub page"
[tutorial]: https://github.com/verekia/js-stack-from-scratch/#javascript-stack-from-scratch "JavaScript Stack from Scratch"