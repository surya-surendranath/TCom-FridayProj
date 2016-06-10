import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'

var products = [
	{title: 'Pirated Music', price: '$24.99', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRf-ygwcRFy0lZB2ypT2372g0KkHJ5sDoYZrHReW89Fds1n0YImOw',	text: 'Impress your wizard friends'},
 	{title: 'Crew Neck', price: '$24.99', image: 'http://www.i-do-t-shirtsstore.com/products/98856.jpg',	text: 'Impress your long-sleeved friends'},
 	{title: 'Tug Boat', price: '$24.99', image: 'http://hennepinboatstore.com/images/Party%20Like%20A%20PirateLARGE.jpg'},
 	{title: 'Sun safe', price: '$24.99', image: 'http://www.dhresource.com/albu_372735907_00-1.600x600/boys-tees-shirts-girls-t-shirts-baby-tshirts.jpg',	text: 'Impress your best friends'},
 	{title: 'Pirate Jellybean', price: '$24.99', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSREDTIEq86O56V8pEQdqefEXfs-pA0Ft4i_pI0vgwb6ZMUHmAvLw',	text: 'Impress your muggle friends'}
]

const renderStuff = document.getElementById('homebody')

console.log(products)

ReactDOM.render(
	<App name='TCom' products={products} />,

	renderStuff
)

console.log('welcome to TCom')

