import React, { Component } from 'react';
import './App.scss';
import CardView from './Components/CardView/CardView'
import Controls from './Components/Controls/Controls'
const mtg = require('mtgsdk');


class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      searchInput: '',
      redFilter: false,
      blueFilter: false,
      blackFilter: false,
      greenFilter: false,
      whiteFilter: false,
      colorlessFilter: false,
      filtered: []
    }
  }


  searchInputHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    }, () => this.updateFiltered())
  }

  filterHandler = (stateObject) => {
    this.setState(stateObject, () => this.updateFiltered())
  }

  updateFiltered = () => {
    if (this.state.redFilter || this.state.blueFilter || this.state.blackFilter || this.state.greenFilter || this.state.whiteFilter || this.state.colorlessFilter) {
      this.setState({
        filtered: this.state.cards.filter(card => (card.name.toLowerCase().includes(this.state.searchInput.toLowerCase()) &&
        ((card.colorIdentity == 'G' && this.state.greenFilter) ||
        (card.colorIdentity == 'B' && this.state.blackFilter) ||
        (card.colorIdentity == 'W' && this.state.whiteFilter) ||
        (card.colorIdentity == 'U' && this.state.blueFilter) ||
        (card.colorIdentity == 'R' && this.state.redFilter) ||
        (card.colorIdentity == '' && this.state.colorlessFilter))
        ))
      })
    } else {
      this.setState({
        filtered: this.state.cards.filter(card => card.name.toLowerCase().includes(this.state.searchInput.toLowerCase()))
      })
    }

  }

  componentWillMount() {
    mtg.card.all({ name: this.state.searchInput, pageSize: 8 })
      .on('data', card => {
        let buffer = this.state.cards;
        if (card.imageUrl != null) buffer.push(card);
        this.setState({
          cards: buffer
        }, this.updateFiltered())
      });

  }

  render() {
    return (
      <div className="App">
        <Controls
          inputHandler={this.searchInputHandler}
          filterHandler={this.filterHandler}
          cards={this.state.cards}
          searchInput={this.state.searchInput}
          redFilter={this.state.redFilter}
          blueFilter={this.state.blueFilter}
          blackFilter={this.state.blackFilter}
          whiteFilter={this.state.whiteFilter}
          greenFilter={this.state.greenFilter}
          colorlessFilter={this.state.colorlessFilter}
        />
        <CardView
          filters={[this.state.redFilter, this.state.blueFilter, this.state.whiteFilter, this.state.blackFilter, this.state.greenFilter, this.state.colorlessFilter]}
          cards={this.state.filtered}
          searchInput={this.state.searchInput}
        />
      </div>
    )
  }

}

export default App;
