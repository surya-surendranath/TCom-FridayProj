import React, { Component } from 'react'
import HomeProductsIndex from './HomeProductsIndex.jsx'
import Cart from './cart.jsx'
class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			user: 'nobody', 
			cart: {}
		}
	}


	componentWillMount() {
		$.ajax({
			url: '/username',
			type: 'GET',
			success: (data)=> {
				return this.setState(data)
			}
		})
	}
 
	updateCart (productId) {
		const id = productId.target.id
		var newState = Object.assign({}, this.state)
		if (newState.cart[id]) {
				newState.cart[id] = newState.cart[id] + 1
			} else {
				newState.cart[id] = 1
			} 
		console.log('cart', newState.cart)
		this.setState(newState)

		
		// console.log("added to cart: ", productId)
	}

	
	
  render () {

    return (
    	<div>
    		<h1>Welcome to {this.props.name}</h1>
    		<p>{ this.state.user === 'nobody' ? "" : "Your name is " + this.state.user.name }</p>
        <HomeProductsIndex products={this.props.products} handleClick={this.updateCart.bind(this)}/>
        <Cart cart={this.state.cart} products={this.props.products}/>
		</div>
    )	
  }
}

export default App
