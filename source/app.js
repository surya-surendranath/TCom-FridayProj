import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'

var PRODUCTS = [
	{title: 'Griyffindor-1', price: '$24.99', image: 'http://www.harrypotterexhibition.com/wp-content/uploads/2014/06/gyriffindor-red-tshirt-new-kids.png',	text: 'Impress your wizard friends'},
 	{title: 'Griyffindor-2', price: '$24.99', image: 'http://www.harrypotterexhibition.com/wp-content/uploads/2014/06/gyriffindor-red-tshirt-new-kids.png',	text: 'Impress your long-sleeved friends'},
 	{title: 'Griyffindor-3', price: '$24.99', image: 'http://www.harrypotterexhibition.com/wp-content/uploads/2014/06/gyriffindor-red-tshirt-new-kids.png',	text: 'Impress your sad friends'},
 	{title: 'Griyffindor-4', price: '$24.99', image: 'http://www.harrypotterexhibition.com/wp-content/uploads/2014/06/gyriffindor-red-tshirt-new-kids.png',	text: 'Impress your absent friends'},
 	{title: 'Griyffindor-5', price: '$24.99', image: 'http://www.harrypotterexhibition.com/wp-content/uploads/2014/06/gyriffindor-red-tshirt-new-kids.png',	text: 'Impress your best friends'},
 	{title: 'Griyffindor-6', price: '$24.99', image: 'http://www.harrypotterexhibition.com/wp-content/uploads/2014/06/gyriffindor-red-tshirt-new-kids.png',	text: 'Impress your muggle friends'}
]

const renderStuff = document.getElementById('homebody')
console.log('welcome to TCom')

ReactDOM.render(
	<App name='TCom' products={PRODUCTS} />,
	renderStuff
)

