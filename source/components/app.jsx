import React, { Component } from 'react'
import HomeProductsIndex from './HomeProductsIndex.jsx'

class App extends Component {

  render () {
    return (
    	<div>
    		<h1>Welcome to {this.props.name}</h1>
        <HomeProductsIndex />
		</div>
    )	
  }
}

export default App
