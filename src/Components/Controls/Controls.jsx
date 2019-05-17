import React, { Component } from "react";
import "../reset.scss";
import "./Controls.scss";
import Filters from './Filters'
const mtg = require('mtgsdk');
let cards = [];


class Controls extends Component {
  constructor() {
    super();
    this.inputTimeout = setTimeout(0);
    this.state={
      cards: [],
      searchInput: ''
    }
  }
  

  inputHandler = (e) => {
    
      this.setState({
        searchInput: e.target.value
      });
     
  }

  searchHandler = (e) => {
    mtg.card.all({name: this.state.searchInput, pageSize: 8})
    .on('data', card => console.log(card))
  }


  render() {
    return (
      <div className="controls__main">
        <div className="controls__container">
          <h1>MTG Card Search</h1>

          <div className="controls__controls">
              <div class="controls__controls__searchInput">
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
