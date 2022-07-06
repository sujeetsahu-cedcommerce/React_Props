import React, { Component } from 'react'
import ComponentTask22 from './ComponentTask22';
export default class ComponentTask21 extends Component {
  render() {
    return (
        <>
        
     <h4>{this.props.user_name}</h4>
     <ComponentTask22 user_name_again={this.props.user_name}/>
     </>
    )
  }
}
