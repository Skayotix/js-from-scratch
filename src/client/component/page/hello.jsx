// @flow

import React from 'react'

import HelloButton from '../../container/hello-button'
import HelloResetButton from '../../container/hello-reset-button'
import Message from '../../container/message'

const HelloPage = () => (
  <div>
    <HelloResetButton />
    <Message />
    <HelloButton />
  </div>
)

export default HelloPage
