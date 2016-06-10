import React, { Component } from 'react'
import HomeProductsIndex from './HomeProductsIndex.jsx'

class App extends Component {

    constructor(props){
    super(props)
    console.log(props)
  }

  render () {
    return (
    	<div>
    		<h1>Welcome to {this.props.name}</h1>
        <HomeProductsIndex products={this.props.products}/>
		</div>
    )	
  }
}

export default App
