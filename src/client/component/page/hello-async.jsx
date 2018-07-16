// @flow

import React from 'react'

import HelloAsyncButton from '../../container/hello-async-button'
import HelloResetButton from '../../container/hello-reset-button'
import MessageAsync from '../../container/message-async'

const HelloAsyncPage = () => (
  <div>
    <HelloResetButton />
    <MessageAsync />
    <HelloAsyncButton />
  </div>
)

export default HelloAsyncPage
