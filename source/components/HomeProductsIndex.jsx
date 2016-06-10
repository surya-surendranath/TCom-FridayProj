import React, { Component } from 'react'
import IndividualProduct from './IndividualProduct.jsx'

class HomeProductsIndex extends Component {

  constructor(props){
    super(props)

  }

  render () {

		return (
			<div>
					{
            this.props.products.map((singleItem, i) => {
						return (
							<div>
								<IndividualProduct title={singleItem.title} price={singleItem.price} image={singleItem.image} text={singleItem.text}/>
							</div>
						)
					 })
          }
			</div>
		)
	}
}
export default HomeProductsIndex
