import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
  }

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
