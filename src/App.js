import React, {Component} from 'react';
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
          }, () => this.setState({
            filtered: this.state.cards.filter(card => card.name.toLowerCase().includes(this.state.searchInput.toLowerCase()))
          }))
    console.log(this.state.filtered)
  }

  componentWillMount() {
    mtg.card.all({name: this.state.searchInput, pageSize: 8})
    .on('data', card => {
      let buffer = this.state.cards;
      if(card.imageUrl != null) buffer.push(card);
      this.setState({
        cards: buffer,
         filtered: buffer
      })
    });

  }

  render() {
    return (
      <div className="App">
              <Controls
              inputHandler = {this.searchInputHandler}
              cards={this.state.cards} 
              searchInput = {this.state.searchInput}
              redFilter = {this.state.redFilter}
              blueFilter = {this.state.blueFilter}
              blackFilter = {this.state.blackFilter}
              whiteFilter = {this.state.whiteFilter}
              greenFilter = {this.state.greenFilter}
              colorlessFilter = {this.state.colorlessFilter}
              />
              <CardView 
              cards={this.state.filtered}
              />
      </div>
    )
  }
  
}

export default App;
