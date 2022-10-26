import React, { Component } from 'react'

export default class Exemple extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <h2>
            {this.props.test}
        </h2>
      </div>
    )
  }
}
