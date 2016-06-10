import React, { Component } from 'react'
import HomeProductsIndex from './HomeProductsIndex.jsx'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {user: 'nobody'}
	}

	componentWillMount() {
		$.ajax({
			url: '/username',
			type: 'GET',
			success: (data)=> {
				console.log('user data from server is ', data)
				return this.setState(data)
			}
		})
	}

	
  render () {

    return (
    	<div>
    		<h1>Welcome to {this.props.name}</h1>
    		<p>{ this.state.user === 'nobody' ? "" : "Your name is " + this.state.user.name }</p>
        <HomeProductsIndex products={this.props.products}/>
		</div>
    )	
  }
}

export default App
