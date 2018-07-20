import React, { Component } from 'react'
import './CocktailDetail.css'

class CocktailDetail extends Component {

  showInfo = () => {
    console.log(this.props)
    return(
      <div>
        <h4>Description</h4>
        <p>{this.props.cocktail.description}</p>
        <h4>Instructions</h4>
        <p>{this.props.cocktail.instructions}</p>
        {(this.props.ingredients === []) ? null :
        (<div>
          <h4>Ingredients</h4>
          <ul>
          {this.props.ingredients.map(ingredient => {return (
            <li key={ingredient.id}>{ingredient.ingredient_name}: {ingredient.amount}</li>
          )})}
          </ul>
        </div>)
      }
      </div>
    )
  }


  render() {
    return (
      <div className="details">
        <h2>{this.props.cocktail.name}</h2>
        {(this.props.showDetails) ? this.showInfo() : null}
      </div>
    )
  }
}

export default CocktailDetail;
