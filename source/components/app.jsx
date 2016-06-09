import React, { Component } from 'react'
import HomeProductsIndex from './HomeProductsIndex.jsx'

class App extends Component {
	componentWillMount() {
		$.ajax({
			url: '/username',
			type: 'GET',
			suceess: this.updateUser
		})
	}

	updateUser(data) {
		this.setState({user: data})
	}

  render () {
    return (
    	<div>
    		<h1>Welcome to {this.props.name}</h1>
    		<p>Your name is {this.state.user} </p>
        <HomeProductsIndex />
		</div>
    )	
  }
}

export default App
