import React, {Component} from 'react';
import './App.scss';
import CardView from './Components/CardView/CardView'
import Controls from './Components/Controls/Controls'
const mtg = require('mtgsdk');


class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
  }


  componentWillMount() {
    mtg.card.all({name: this.state.searchInput, pageSize: 8})
    .on('data', card => {
      let buffer = this.state.cards;
      if(card.imageUrl != null) buffer.push(card);
      this.setState({
        cards: buffer
      })
    });

  }

  render() {
    return (
      <div className="App">
              <Controls
              cards={this.state.cards} 
              />
              <CardView 
              cards={this.state.cards}
              />
      </div>
    )
  }
  
}

export default App;
