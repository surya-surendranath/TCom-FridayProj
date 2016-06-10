import React from 'react'





export default ({cart, products}) => {

	const getProd = () => {
		for ( var ids in cart) {
			// console.log(Number(products[ids].price))
			return (<li>{products[ids].title}, qty: {cart[ids]}, total-cost: ${Number(products[ids].price)*cart[ids]}</li>)
		}
	}


	return (
	<div id='cart'>
		<h4>This is your shopping cart</h4>
		<ul>{getProd()}
		</ul>
		
	</div>)
}