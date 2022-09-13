import React from 'react';
import './App.css';
import Timer from './components/Timer';

class App extends React.Component {
  state = {
    showTimer: true,
  }

  toggleTimer = () => {
    this.setState((prevState) => ({ showTimer: !prevState.showTimer}))
  }

  render () {
    return (
      <div>
      <header>
        Trybe Contador
      </header>
      <Timer />
      <button type="button" onClick={ this.toggleTimer }>Esconder Timer</button>
    </div>
    ) 
  }
}

export default App;
