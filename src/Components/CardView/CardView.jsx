import React, { Component } from "react";
import "./CardView.scss";
import Card from "./Card";
import DetailView from "./DetailView";

class CardView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      filters: props.filters,
      cards: [],
      selected: {},
      showInfo: false,
      searchInput: props.searchInput
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.state.searchInput.toLowerCase() !=
        nextProps.searchInput.toLowerCase() ||
      !(
        this.state.filters.length === nextProps.filters.length &&
        this.state.filters.every(
          (value, index) => value === nextProps.filters[index]
        )
      )
    )
      this.setState({ page: 0 });
    this.setState({ cards: nextProps.cards, filters: nextProps.filters });
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
    if (typeof card == "undefined") return;
    this.setState({ selected: card, showInfo: true });
  };

  closeCardInfo = () => {
    this.setState({
      showInfo: false
    });
  };

  cardHover = () => {
    console.log('hovered')
  }

  render() {
    return (
      <div className="cardTable">
        {this.state.showInfo === true ? (
          <DetailView
            closeAction={this.closeCardInfo}
            card={this.state.selected}
          />
        ) : null}
        <div className="leftArrow__placeholder">
          {this.props.prevPage != null ? (
            <div
              className="leftArrow"
              style={this.leftArrowStyle}
              onClick={this.props.prevPage}
            />
          ) : null}
        </div>
        <div className="cards">
          {[...Array(this.state.cards.length)].map((elem, index) => (
            <Card
              key={index}
              onClick={() =>
                this.showCardInfo(this.state.cards[this.state.page + index])
              }
              imageUrl={
                typeof this.state.cards[this.state.page + index] == "undefined"
                  ? null
                  : this.state.cards[this.state.page + index].imageUrl
              }
            />
          ))}
        </div>
        <div className="rightArrow__placeholder">
          {this.props.nextPage != null ? (
            <div
              className="rightArrow"
              style={this.leftArrowStyle}
              onClick={this.props.nextPage}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default CardView;
