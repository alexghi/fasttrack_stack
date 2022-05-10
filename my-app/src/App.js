import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Welcome } from './Welcome'
import Greeting from './Greeting'
import { MyComponent } from './MyComponent'
import { Example } from './Example'
import ExampleSimplified from './ExampleSimplified'
// function component
/*
function Student(props) {
    return <div> hello I'm a student and my name is {props.name}</div>
}
*/

// class component
/*
class Student extends React.Component {
    render() {
        return <h1>hello I'm a student and my name is {this.props.name}</h1>;
    }
}
*/


function App(props) {
  return (
      <div>
        <MyComponent/>
        <Example/>
          <div style={{
              backgroundColor: 'lightgreen',
              height: 300
          }}>
              <ExampleSimplified/>
          </div>
      </div>
  )
}

export default App;
