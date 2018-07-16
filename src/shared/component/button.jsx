// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
}

const Button = ({ label, handleClick }: Props) => (
  <button type="button" onClick={handleClick} className="btn btn-primary">
    {label}
  </button>
)

export default Button
