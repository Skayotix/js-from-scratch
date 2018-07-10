// @flow

import React from 'react'
import Profile from './profile'

const SousComponent = () => (
  <h2>
Je suis un super sous-composant!
  </h2>
)

const App = () => (
  <div>
    <h1>
Hello toto!
    </h1>
    <SousComponent />
    <Profile avatar="https://s.gravatar.com/avatar/a45f7f43eb8a85b3c1cdae2b1104660e.jpg" pseudo="damien" age="20" />
  </div>
)

export default App
