var React = require('react')
var Layout = require('./layout.js')

// This is just a simple example of a component that can be rendered on both
// the server and browser

module.exports = React.createClass({

  
  getInitialState: function() {
    return {}
  },

  componentDidMount: function() {
  },


  handleClick: function() {

  },

  render: function() {

    return <Layout />
  }
})