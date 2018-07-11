// @flow

import React from 'react'
import HelloButton from './container/hello-button'
import Message from './container/message'
import Profile from './component/profile'
import { APP_NAME } from '../shared/config'

const App = () => (
  <div>
    <h1>
      {APP_NAME}
    </h1>
    <Message />
    <HelloButton />
    <Profile avatar="https://s.gravatar.com/avatar/a45f7f43eb8a85b3c1cdae2b1104660e.jpg" pseudo="damien" age="20" />
  </div>
)

export default App
