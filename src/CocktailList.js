import React, { Component } from 'react';
import Cocktail from './Cocktail'
import './CocktailList.css'
import Filter from './Filter'
import UUID from 'uuid'

class CocktailList extends Component {

  render() {
    return (
      <div className="sidebar">


        <h2>LIST OF COCKTAILS</h2>

        <Filter searchTerm={this.props.searchTerm} handleInput={this.props.handleInput}/>

          {this.props.cocktails.map(cocktail => {return (
            <a key={UUID()} onClick={() => {this.props.selectCocktail(cocktail)}}>
            <Cocktail
              key={cocktail.id}
              cocktail={cocktail}
              selectCocktail={this.props.selectCocktail}
              selectedCocktail={this.props.selectedCocktail}
              />
            </a>
          )})}

      </div>


    )
  }
}

export default CocktailList
