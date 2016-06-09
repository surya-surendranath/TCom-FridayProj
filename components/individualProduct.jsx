import React, { Component } from 'react'
import reactDom from 'react-dom'

class IndividualProduct extends Component {


  render () {
    return (
        <div>
        	<h1>{this.this.props.title}</h1>
        	<p>{this.this.props.price}</p>
        	<img>{this.props.image}</img>
        	<p>{this.this.props.text}</p>
    		  <button>Buy Now</button>
        </div>    	
	  )
  }
}

export default IndividualProduct
