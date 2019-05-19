import React, { Component } from "react";
import "../reset.scss";
import "./Controls.scss";
import Filters from './Filters'


class Controls extends Component {
  constructor() {
    super();
    this.state={
      searchInput: '',
      cards: [],
      filtered: []
    }
  }

  inputHandler = (e) => {
    
      this.setState({
        searchInput: e.target.value
      });
     
  }

  searchHandler = (e) => {
  }


  render() {
    return (
      <div className="controls__main">
        <div className="controls__container">
          <h1>MTG Card Search</h1>

          <div className="controls__controls">
              <div className="controls__controls__searchInput">
                <input onChange={this.inputHandler} value={this.state.searchInput} type="text" placeholder="Enter card name..." />
                <button onClick={this.searchHandler}>Search</button>
              </div>
              <Filters />
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
