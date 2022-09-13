import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

class App extends React.Component {
  constructor(){
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      clicks1: 0,
      clicks2: 0,
      clicks3: 0,
    }
  }
  
  handleClick1() {
    this.setState((prevState) => ({
      clicks1: prevState.clicks1 + 1
    }))
  }

  handleClick2() {
    this.setState((prevState) => ({
      clicks2: prevState.clicks2 + 1
    }))
  }

  handleClick3() {
    this.setState((prevState) => ({
      clicks3: prevState.clicks3 + 1
    }))
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'beige' : 'pink';
  }

  render() {
    return (
    <div>
      <button
        onClick={this.handleClick1}
        style={{ backgroundColor: this.getButtonColor(this.state.clicks1) }}>Botao 1 {this.state.clicks1}</button>
      <button 
        onClick={this.handleClick2}
        style={{ backgroundColor: this.getButtonColor(this.state.clicks2) }}
        >Botao 2  {this.state.clicks2}</button>
      <button 
        onClick={this.handleClick3}
        style={{ backgroundColor: this.getButtonColor(this.state.clicks3) }}
        >Botao 3  {this.state.clicks3}</button>
    </div>
    );
  }
 }


export default App;