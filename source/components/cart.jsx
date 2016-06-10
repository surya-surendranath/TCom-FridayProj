import React from 'react'





export default ({cart, products}) => {

	const getProd = () => {
		var arry = []
		for ( var ids in cart) {
			arry.push((<li>{products[ids].title}, qty: {cart[ids]}, total-cost: ${Number(products[ids].price)*cart[ids]}</li>))
		}
		return arry
	}

	const total = () => {
		let total = 0
		for ( var ids in cart) {
			total+=Number(products[ids].price)*cart[ids]
		}
		return total
	}
	


	return (
	<div id='cart'>
		<h4>This is your shopping cart</h4>
		<ul>{getProd().map( (item) => item )}
		</ul>
	<p>Total: ${Math.floor(total())}</p>
		
	</div>)
}