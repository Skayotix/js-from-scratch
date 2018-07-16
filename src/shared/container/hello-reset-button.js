// @flow

import { connect } from 'react-redux'

import { resetHello } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Reset',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(resetHello()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
