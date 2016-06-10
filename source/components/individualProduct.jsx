import React, { Component } from 'react'

class IndividualProduct extends Component {
  
  constructor(props){
    super(props)
  }

  render () {
    return (
        <div className="indiv">
            <h1>{this.props.title}</h1>
            <p>{this.props.price}</p>
            <img className="img" src={this.props.image}/>
            <p>{this.props.text}</p>
              <button>Buy now</button>
        </div>      
      )
  }
}

export default IndividualProduct