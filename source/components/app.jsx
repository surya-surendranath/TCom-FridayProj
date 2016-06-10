import React, { Component } from 'react'
import HomeProductsIndex from './HomeProductsIndex.jsx'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {user: 'nobody'}
	}

	componentWillMount() {
		console.log('componentWillMount is running now')
		$.ajax({
			url: '/username',
			type: 'GET',
			success: ()=> {
				return this.setState({user:data})
			}
		})
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
