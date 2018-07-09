// @flow

import React from 'react'

const SousComponent = () => (
  <h2>
Je suis un super sous-composant
  </h2>
)


const App = () => (
  <div>
    <h1>
Hello toto!
    </h1>
    <SousComponent />
  </div>
)

export default App
