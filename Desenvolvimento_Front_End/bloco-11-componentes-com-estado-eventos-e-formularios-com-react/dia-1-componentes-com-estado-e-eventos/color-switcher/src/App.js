import React from 'react';
import './App.css';
import colors from './colorsData';

class App extends React.Component {
  // forma padrao de criacao de state
  // constructor(){
  //   super()
  //   this.state = {
  //     typedText: 'laland'
  //   }
  // }

  // nova forma de criar estado, mais sucinta.
  state = {
    typedText: ''
  }

  handleChange = (event) => {
    this.setState({ typedText: event.target.value })
  }

  render () {
    return (
      <div>
        <h1>Filtro de Cores</h1>
          <input
            type="text"
            value={this.state.typedText}
            onChange={this.handleChange}
          />
          {/* botao para resetar (apagar o texto de dentro) do campo input */}
          <button onClick={() => this.setState({ typedText: '' })}>Delete Input</button>
        <hr />
        <ul>
          {
            colors
            // filtra as cores ao digitar as letras, retorna true ou false, se incluir ele retorna o elemento, se nao incluir nao retorna nada.
            .filter(color => color.name.includes(this.state.typedText))
            // retorna os nomes das cores com os quadradinhos respectivos
            .map((color) => {
              return <li key={color.hex}>
                <div 
                // seta no css a cor de fundo do quadradinho
                  style={{backgroundColor: color.hex}}
                  className='color-display'>
                </div>
                {color.name}</li>
            })
          }
        </ul>
      </div>
    );
  }
  
  }
  
export default App;
