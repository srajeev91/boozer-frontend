import React, { Component } from 'react'
import './CreateCocktail.css'
import UUID from 'uuid'

class CreateCocktail extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: [{ ingredient_name: '', amount: [] }]
    };
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({
     ingredients: this.state.ingredients.concat([{ ingredient_name: '', amount: [] }])
   });
  }

  render() {
    return(
      <div className="create">
        <h3>Create a Cocktail</h3>
        <form onSubmit={this.props.handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="text"
            value={this.props.name}
            onChange={this.props.handleChange}
          />
          <br/>

          <textarea
            type="text"
            name="description"
            className="textbox text"
            placeholder="Description"
            value={this.props.description}
            onChange={this.props.handleChange}
          />
          <br/>

          <textarea
            type="text"
            name="instructions"
            className="textbox text"
            placeholder="Instructions"
            value={this.props.instructions}
            onChange={this.props.handleChange}
          />

          {this.state.ingredients.map(ingredient => {return (
            <div className="ingredient" key={UUID()}>
              <br/>
              <span>
                <input
                  type="text"
                  name="ingredient"
                  placeholder="Ingredient"
                  className="text"
                />
                <input
                  type="text"
                  name="proportion"
                  placeholder="Proportion"
                  className="text"
                />
              </span>
            </div>
          )})}

          <br/>
          <button id="add" onClick={this.handleClick}>
            Add Ingredient
          </button>
          <br/>
          <button type="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default CreateCocktail;
