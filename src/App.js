import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailList from './CocktailList'
import CocktailDetail from './CocktailDetail'
import CreateCocktail from './CreateCocktail'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cocktails: [],
      selectedCocktail: [],
      searchTerm: "",
      filteredCocktails: [],
      showDetails: false,
      name: "",
      description: "",
      instructions: "",
      ingredients: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(response => response.json())
      .then(d => {
        this.setState({
          cocktails: d,
          filteredCocktails: d
        })
      })
  }

  selectCocktail = (cocktail) => {
    fetch(`http://localhost:3000/api/v1/cocktails/${cocktail.id}`)
      .then(response => response.json())
      .then(d => {
        if (d.status === 404) {
          this.setState({
            selectedCocktail: cocktail,
            showDetails: true,
          })
        } else {
          this.setState({
            selectedCocktail: cocktail,
            showDetails: true,
            ingredients: d.proportions
          })
        }
      })
  }

  handleInput = (event) => {
    this.setState({searchTerm: event.target.value}, this.filterCocktails)
  }

  filterCocktails = () => {
    let newarray = this.state.cocktails.filter(cocktail => {return(
      cocktail.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    )})

    this.setState({filteredCocktails: newarray})
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let newobj = {
      "id": this.state.cocktails.length + 1,
      "name": this.state.name.toUpperCase(),
      "description": this.state.description,
      "instructions": this.state.instructions,
      "source": "Flatiron",
      "created_at": new Date().toString(),
      "updated_at": new Date().toString()
    }

    let array = this.state.cocktails.slice(0)
    array.push(newobj)

    this.setState({
      cocktails: array,
      filteredCocktails: array,
      name: "",
      description: "",
      instructions: ""
    })
  }

  render() {
    return (
      <div className="App">

        <div className="box">
          <CocktailList
            cocktails={this.state.filteredCocktails}
            selectCocktail={this.selectCocktail}
            selectedCocktail={this.state.selectedCocktail}
            searchTerm={this.state.searchTerm}
            handleInput={this.handleInput}
          />
        </div>

        {/* <Filter searchTerm={this.state.searchTerm} handleInput={this.handleInput}/> */}

        <div className="box">
          {(this.state.selectedCocktail === []) ? null : <CocktailDetail cocktail={this.state.selectedCocktail} showDetails={this.state.showDetails} ingredients={this.state.ingredients} /> }
        </div>

        <br/>
        <div className="box" id="right">
          <CreateCocktail
            name={this.state.name}
            description={this.state.description}
            instructions={this.state.instructions}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}/>
        </div>

      </div>
    );
  }
}

export default App;
