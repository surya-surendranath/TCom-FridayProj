import React, { Component } from 'react'

class IndividualProduct extends Component {

  render () {
    return (
        <div>
        	<h1>{this.props.title}</h1>
        	<p>{this.props.price}</p>
        	<img>{this.props.image}</img>
        	<p>{this.props.text}</p>
    		  <button>Buy Now</button>
        </div>    	
	  )
  }
}

export default IndividualProduct
