import React from 'react'
import { render } from 'react-dom'
import App from './components/app'


getInitialState: function () {
  return ( 
  	var PRODUCTS = {
  	1 : {title: 'Griyffindor-1', price: '$24.99', image: 'http://www.harrypotterexhibition.com/wp-content/uploads/2014/06/gyriffindor-red-tshirt-new-kids.png',	text: 'Impress your wizard friends'},
   	2 : {title: 'Griyffindor-2', price: '$24.99', image: 'http://www.harrypotterexhibition.com/wp-content/uploads/2014/06/gyriffindor-red-tshirt-new-kids.png',	text: 'Impress your long-sleeved friends'},
   	3 : {title: 'Griyffindor-3', price: '$24.99', image: 'http://www.harrypotterexhibition.com/wp-content/uploads/2014/06/gyriffindor-red-tshirt-new-kids.png',	text: 'Impress your sad friends'},
   	4 : {title: 'Griyffindor-4', price: '$24.99', image: 'http://www.harrypotterexhibition.com/wp-content/uploads/2014/06/gyriffindor-red-tshirt-new-kids.png',	text: 'Impress your absent friends'},
   	5 : {title: 'Griyffindor-5', price: '$24.99', image: 'http://www.harrypotterexhibition.com/wp-content/uploads/2014/06/gyriffindor-red-tshirt-new-kids.png',	text: 'Impress your best friends'},
   	6 : {title: 'Griyffindor-6', price: '$24.99', image: 'http://www.harrypotterexhibition.com/wp-content/uploads/2014/06/gyriffindor-red-tshirt-new-kids.png',	text: 'Impress your muggle friends'},

    }
  )
PRODUCTS;
};



const renderStuff = document.getElementById('homebody')

ReactDOM.render(
	<App name='TCom' products=(PRODUCTS) />, 
	<IndividualProduct />,
	<HomeProductsIndex />,
	renderStuff
	)

console.log('welcome to TCom')
