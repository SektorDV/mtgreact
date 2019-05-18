import React, { Component } from "react";
import "./CardView.scss";
import Card from "./Card";
import DetailView from "./DetailView";

class CardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      cards: [],
      selected: {},
      showInfo: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ cards: nextProps.cards });
  }

  prevPage = () => {
    if (this.state.page > 0) {
      this.setState(prevstate => ({ page: prevstate.page - 8 }));
    }
  };
  nextPage = () => {
    this.setState(prevstate => ({ page: prevstate.page + 8 }));
  };

  showCardInfo = card => {
    this.setState({ selected: card, showInfo: true });
  };

  closeCardInfo = () => {
    this.setState({
      showInfo: false
    });
  };

  render() {
    return (
      <div className="cardTable">
        {this.state.showInfo === true ? (
          <DetailView
            closeAction={this.closeCardInfo}
            card={this.state.selected}
          />
        ) : null}
        {this.state.page > 0 ? (
          <div
            className="leftArrow"
            style={this.leftArrowStyle}
            onClick={this.prevPage}
          />
        ) : null}
        <div
          className="cards"
          style={{ marginLeft: this.state.page > 0 ? 0 : 60 }}
        >
          <Card
            onClick={() => this.showCardInfo(this.state.cards[this.state.page])}
            imageUrl={
              typeof this.state.cards[this.state.page] == "undefined"
                ? null
                : this.state.cards[this.state.page].imageUrl
            }
          />
          <Card
            onClick={() =>
              this.showCardInfo(this.state.cards[this.state.page + 1])
            }
            imageUrl={
              typeof this.state.cards[this.state.page + 1] == "undefined"
                ? null
                : this.state.cards[this.state.page + 1].imageUrl
            }
          />
          <Card
            onClick={() =>
              this.showCardInfo(this.state.cards[this.state.page + 2])
            }
            imageUrl={
              typeof this.state.cards[this.state.page + 2] == "undefined"
                ? null
                : this.state.cards[this.state.page + 2].imageUrl
            }
          />
          <Card
            onClick={() =>
              this.showCardInfo(this.state.cards[this.state.page + 3])
            }
            imageUrl={
              typeof this.state.cards[this.state.page + 3] == "undefined"
                ? null
                : this.state.cards[this.state.page + 3].imageUrl
            }
          />
          <Card
            onClick={() =>
              this.showCardInfo(this.state.cards[this.state.page + 4])
            }
            imageUrl={
              typeof this.state.cards[this.state.page + 4] == "undefined"
                ? null
                : this.state.cards[this.state.page + 4].imageUrl
            }
          />
          <Card
            onClick={() =>
              this.showCardInfo(this.state.cards[this.state.page + 5])
            }
            imageUrl={
              typeof this.state.cards[this.state.page + 5] == "undefined"
                ? null
                : this.state.cards[this.state.page + 5].imageUrl
            }
          />
          <Card
            onClick={() =>
              this.showCardInfo(this.state.cards[this.state.page + 6])
            }
            imageUrl={
              typeof this.state.cards[this.state.page + 6] == "undefined"
                ? null
                : this.state.cards[this.state.page + 6].imageUrl
            }
          />
          <Card
            onClick={() =>
              this.showCardInfo(this.state.cards[this.state.page + 7])
            }
            imageUrl={
              typeof this.state.cards[this.state.page + 7] == "undefined"
                ? null
                : this.state.cards[this.state.page + 7].imageUrl
            }
          />
        </div>
        <div
          className="rightArrow"
          style={this.leftArrowStyle}
          onClick={this.nextPage}
        />
      </div>
    );
  }
}

export default CardView;