// @flow

import 'babel-polyfill'
import Immutable from 'immutable'
import $ from 'jquery'
import Tether from 'tether'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux'
import thunkMiddleware from 'redux-thunk'

import App from '../shared/app'
import helloReducer from '../shared/reducer/hello'
import { APP_CONTAINER_SELECTOR, JSS_SSR_SELECTOR } from '../shared/config'
import { isProd } from '../shared/util'


window.jQuery = $
window.Tether = Tether
require('bootstrap')


/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__
/* eslint-enable no-underscore-dangle */

const store = createStore(
  combineReducers({ hello: helloReducer }),
  { hello: Immutable.fromJS(preloadedState.hello) },
  composeEnhancers(applyMiddleware(thunkMiddleware)))

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <Router>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </Router>
  </Provider>
)

if (rootEl) {
  ReactDOM.hydrate(wrapApp(App, store), rootEl)
}

const jssServerSide = document.querySelector(JSS_SSR_SELECTOR)
// flow-disable-next-line
jssServerSide.parentNode.removeChild(jssServerSide)

// flow-disable-next-line
if (module.hot && rootEl) {
  // flow-disable-next-line
  module.hot.accept('../shared/app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/app').default
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}
