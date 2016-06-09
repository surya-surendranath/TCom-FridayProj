import React, { Component } from 'react'
import reactDom from 'react-dom'

import IndividualProduct from './IndividualProduct.jsx'

class HomeProductsIndex extends Component {
	constructor (props) {
		super(props)
		console.log("Products HomeProductsIndex got from IndividualProduct", this.props.tShirts)
	}

	render () {

		const tShirts = this.props.tShirts

		return (
			<div>
				<ul>
					{tShirts.map( (singleItem, i) => {
						return (
							<div>
								<IndividualProduct />
							</div>
						)
					})}
				</ul>
			</div>
		)
	}
}
export default HomeProductsIndex
