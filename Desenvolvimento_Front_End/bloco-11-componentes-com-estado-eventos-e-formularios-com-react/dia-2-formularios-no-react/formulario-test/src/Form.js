import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
    };
  }
    
    handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }


  render() {
    // Opcao de desestructuring:
    // const { name, email, age, anecdote } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea 
                name="estadoFavorito" 
                value={this.state.estadoFavorito}
                //  value={estadoFavorito} por causa da desestruturacao acima! pode ser feita pra todos os campos de  value.
                onChange={this.handleChange} 
              />
          </label>
          <input
            type="number"
            name="idade"
            value={this.state.idade}
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            value={this.state.vaiComparecer}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;