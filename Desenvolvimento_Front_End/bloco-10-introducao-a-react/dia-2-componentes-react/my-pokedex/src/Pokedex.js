import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
      // opcao de destructuring
    //   const {pokemons} = this.props
    return (
      <div className="pokedex">
          {
          this.props.pokemons.map(item => <Pokemon key={item.id} pokemon={item} />)
          }
      </div>
    );
  }
}

export default Pokedex;
