import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    	<div>
    		<h1>Welcome to {this.props.name}</h1>
    		<HomeProductsIndex 
    		  products={this.props.products}/>
    		  products={this.props.products}/>
		</div>
    )	
  }

}

export default App
