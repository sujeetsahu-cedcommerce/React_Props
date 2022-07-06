import React, { Component } from 'react'

export default class ComponentTask1 extends Component {
  render() {
    return (
      <p>Hello {this.props.name}</p>
    )
  }
}
