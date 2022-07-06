// import logo from './logo.svg';
import './App.css';
import ComponentParent4 from './ComponentParent4';
import ComponentParent5 from './ComponentParent5';
import ComponentTask1 from './ComponentTask1';
import ComponentTask21 from './ComponentTask21';
import ComponentTask31 from './ComponentTask31';


function App() {
  
  return (
    <>
     Q1. Make a class component as child of App.js and pass your name as prop, then "Hello  name must be printed.

     <ComponentTask1 name="Sujeet"/>

     Q2. Pass a property named username from Top class component to down most class component in the component hierarchy and print it.

     <ComponentTask21 user_name="sujeetsahu123456578"/><br/>

     Q3. Repeat the above two tasks using functional components.
     
     <ComponentTask31 name="sujeet"/>
     <ComponentTask31 user_name="sujeetsahu123456578"/>

     Q4. Make a parent class component and pass two numbers and an operator as props to its child component. The child component must perform the operation on the two numbers and print it.
     <ComponentParent4/>

     Q5 Repeat the same task using class components.<br/><br/>

     <ComponentParent5/>
    </>
  );
}

export default App;
