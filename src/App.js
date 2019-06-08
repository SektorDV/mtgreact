import React, { Component } from "react";
import "./App.scss";
import CardView from "./Components/CardView/CardView";
import Controls from "./Components/Controls/Controls";
import '../node_modules/hopscotch/dist/css/hopscotch.min.css'


const hopscotch = require('hopscotch');
const mtg = require("mtgsdk");

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      currentPageCards: [],
      prevPageCards: [],
      nextPageCards: [],
      searchInput: "",
      redFilter: false,
      blueFilter: false,
      blackFilter: false,
      greenFilter: false,
      whiteFilter: false,
      filtered: []
    };
  }

  searchTimeout = setTimeout(() => {}, 0);

  prevPage = () => {
    let currentBuffer = this.state.currentPageCards;
    let prevBuffer = this.state.prevPageCards;
    if (this.state.currentPage > 1) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage - 1,
        nextPageCards: currentBuffer,
        currentPageCards: prevBuffer,
        prevPageCards: []
      }), () => {if (this.state.currentPage > 1) this.getPrevPageCards()})
    }
  }

  nextPage = () => {
    let currentBuffer = this.state.currentPageCards;
    let nextBuffer = this.state.nextPageCards;
      this.setState(prevState => ({
        currentPage: prevState.currentPage + 1,
        prevPageCards: currentBuffer,
        currentPageCards: nextBuffer,
        nextPageCards: []
      }), () => this.getNextPageCards())
  }

  getPrevPageCards = () => {
    mtg.card.where( {colorIdentity: `${[
      this.state.redFilter ? "R" : null,
      this.state.blueFilter ? "U" : null,
      this.state.whiteFilter ? "W" : null,
      this.state.blackFilter ? "B" : null,
      this.state.greenFilter ? "G" : null
    ]
      .filter(Boolean)
      .join(",")}`,name: this.state.searchInput.trim().length > 0
      ? this.state.searchInput
      : "",pageSize: 8, page: this.state.currentPage - 1, contains: 'imageUrl,multiverseId'} )
    .then(cards => {
      this.setState({
        prevPageCards: cards
      })
    })
  }

  getNextPageCards = () => {
    this.setState({nextPageCards: []}, () => {
      mtg.card.where( {colorIdentity: `${[
        this.state.redFilter ? "R" : null,
        this.state.blueFilter ? "U" : null,
        this.state.whiteFilter ? "W" : null,
        this.state.blackFilter ? "B" : null,
        this.state.greenFilter ? "G" : null
      ]
        .filter(Boolean)
        .join(",")}`,name: this.state.searchInput.trim().length > 0
        ? this.state.searchInput
        : "",pageSize: 8, page: this.state.currentPage + 1, contains: 'imageUrl,multiverseId'} )
      .then(cards => {
        this.setState({
          nextPageCards: cards
        })
      })
    })
    
  }

  searchInputHandler = e => {
    this.setState(
      {
        searchInput: e.target.value
      },
      () => this.updateFiltered()
    );
  };

  filterHandler = stateObject => {
    this.setState(stateObject, () => this.updateFiltered());
  };

  getBaseSet = () => {
    mtg.card
      .where({ pageSize: 8, page: 1, contains: 'imageUrl,multiverseId' })
      .then(cards => {
        this.setState({
          currentPageCards: cards
        });
      });
  };

  updateFiltered = () => {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      mtg.card.where({
        colorIdentity: `${[
          this.state.redFilter ? "R" : null,
          this.state.blueFilter ? "U" : null,
          this.state.whiteFilter ? "W" : null,
          this.state.blackFilter ? "B" : null,
          this.state.greenFilter ? "G" : null
        ]
          .filter(Boolean)
          .join(",")}`,
        name: this.state.searchInput.trim().length > 0
        ? this.state.searchInput
        : "",
        pageSize: 8,
        page: 1,
        contains: 'imageUrl,multiverseId'
      }).then(cards => {
        this.setState({
          currentPage: 1,
          prevPageCards: [],
          currentPageCards: cards,
          nextPageCards: []
        }, () => this.getNextPageCards())
      })
    },300)
  }

  componentWillMount() {
    this.getBaseSet();
    this.getNextPageCards();
  }

  setCookie = (key, value) => {
    let expiry = new Date();
    expiry.setTime(expiry.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = `${key} = ${value}; path=/;expires=${expiry.toUTCString()}`;
  }

  getCookie = (key) => {
    let keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
  }

  intro = {
    id: "intro",
    steps: [
      {
        title: "Welcome",
        content: "Click here to open the search menu",
        target: "controls__hide__pip",
        placement: "bottom",
        arrowOffset: "center",
        xOffset: "center"
      }
    ],
    onEnd: () => this.setCookie('seenIntro', 'seen'),
    onClose: () => this.setCookie('seenIntro', 'seen')
  }

  componentDidMount() {
    if (!this.getCookie('seenIntro')) {
      hopscotch.startTour(this.intro);
    }
    
  }

  render() {
    return (
      <div className="App">
        <Controls
          inputHandler={this.searchInputHandler}
          filterHandler={this.filterHandler}
          searchInput={this.state.searchInput}
          redFilter={this.state.redFilter}
          blueFilter={this.state.blueFilter}
          blackFilter={this.state.blackFilter}
          whiteFilter={this.state.whiteFilter}
          greenFilter={this.state.greenFilter}
          colorlessFilter={this.state.colorlessFilter}
        />
        <CardView
          filters={[
            this.state.redFilter,
            this.state.blueFilter,
            this.state.whiteFilter,
            this.state.blackFilter,
            this.state.greenFilter,
            this.state.colorlessFilter
          ]}
          cards={this.state.currentPageCards}
          searchInput={this.state.searchInput}
          nextPage = {this.state.nextPageCards.length>0?this.nextPage:null}
          prevPage = {this.state.prevPageCards.length>0?this.prevPage:null}
        />
      </div>
    );
  }
}

export default App;
