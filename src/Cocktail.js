import React, { Component } from 'react'

class Cocktail extends Component {


  render() {
    return (
      <div onClick={() => {this.props.selectCocktail(this.props.cocktail)}}>
        <h3>{this.props.cocktail.name}</h3>
      </div>
    )
  }
}

export default Cocktail;
