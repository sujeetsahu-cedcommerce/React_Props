import React from "react";
import ComponentTask32 from "./ComponentTask32";

export default function ComponentTask31(props) {
  return (
    <>
      <h4>{props.name}</h4>
      <ComponentTask32 user_name1={props.user_name}/>
    </>
  );
}
