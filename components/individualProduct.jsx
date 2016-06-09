import React, { Component } from 'react'
import reactDom from 'react-dom'

class IndividualProduct extends Component {


  render () {
    return (
    	<img>{this.props.image}</img>
	)
  }
}

export default IndividualProduct
