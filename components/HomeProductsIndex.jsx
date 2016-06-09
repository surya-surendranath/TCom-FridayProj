import React, { Component } from 'react'
import IndividualProduct from './IndividualProduct.jsx'

class HomeProductsIndex extends Component {

	render () {

		const tShirts = this.props.tShirts

		return (
			<div>
					{tShirts.map( (singleItem, i) => {
						return (
							<div>
								<IndividualProduct />
							</div>
						)
					})
        }
			</div>
		)
	}
}
export default HomeProductsIndex
