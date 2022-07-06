import React from 'react'

export default function ComponentChild4(props) {
    const { operand1, operand2, operator }=props;
    let result = 0;
    
   // console.log(Number(operand1))
    if(operator==="+"){
        result = Number(operand1) + Number(operand2);
    }
    else if(operator==="-"){
        result = Number(operand1) - Number(operand2);
    }
    else if(operator === "*"){
        result = Number(operand1) * Number(operand2);
    }
    else{
        result = Number(operand1) / Number(operand2);
    }
  return (
      <>
      {result}
      </>
  );
}
