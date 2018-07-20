import React, { Component } from 'react'

class Filter extends Component {

  render() {
    return(
      <div>
        <br/>
        <input
          type="text"
          value={this.props.searchTerm}
          onChange={this.props.handleInput}
          placeholder="Search Cocktails by Name" />
      </div>
    )
  }
}

export default Filter;
