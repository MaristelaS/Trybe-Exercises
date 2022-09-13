import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const textJSX = <h1>Hello There</h1>;
class App extends React.Component {
  render() {
    return textJSX;
  }
}

export default App;
