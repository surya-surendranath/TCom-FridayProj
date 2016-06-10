import React, { Component } from 'react'

class IndividualProduct extends Component {
  
  constructor(props){
    super(props)
  }

  render () {
    return (
        <div>
            <h1>{this.props.title}</h1>
            <p>${this.props.price}</p>
            <img src={this.props.image}/>
            <p>{this.props.text}</p>
              <button id={this.props.productId} onClick={this.props.handleClick}>Buy now</button>
        </div>      
      )
  }
}

export default IndividualProduct