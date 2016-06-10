import React, { Component } from 'react'
import IndividualProduct from './IndividualProduct.jsx'
import products from '../app.js'

class HomeProductsIndex extends Component {

	render () {

		const products = this.props.products

		return (
			<div>
					{products.map((singleItem, i) => {
						return (
							<div>
								<IndividualProduct />
							</div>
						)
					})}
			</div>
		)
	}
}
export default HomeProductsIndex
