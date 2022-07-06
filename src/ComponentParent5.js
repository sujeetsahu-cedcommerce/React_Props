import React, { Component } from 'react'
import ComponentChild5 from './ComponentChild5'

export default class ComponentParent5 extends Component {
  render() {
    return (
     <ComponentChild5 value1="5" value2="6" operator="*"/>
    )
  }
}
