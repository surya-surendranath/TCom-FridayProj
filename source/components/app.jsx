import React, { Component } from 'react'
// import HomeProductsIndex from './HomeProductsIndex.jsx'

class App extends Component {

    constructor(props){
    super(props)
    console.log(props)
  }

  render () {
    return (
    	<div>
    		<h1>Welcome to {this.props.name}</h1>

		</div>
    )	
  }
}

export default App
