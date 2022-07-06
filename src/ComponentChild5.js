import React, { Component } from 'react'

export default class ComponentChild5 extends Component {
   

  render() {
    let v1 = this.props.value1;
    let v2 = this.props.value2;
    let operator = this.props.operator;
    let result = 0;

    console.log(Number(v1))
     if(operator==="+"){
         result = Number(v1) + Number(v2);
     }
     else if(operator==="-"){
         result = Number(v1) - Number(v2);
     }
     else if(operator === "*"){
         result = Number(v1) * Number(v2);
     }
     else{
         result = Number(v1) / Number(v2);
     }
    return (
        <>
        {result}
        </>
    )
  }
}
