import React, { Component } from "react";

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      card: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show,
      card: nextProps.card
    });
  }

  parseManaCost = input => {
    if (typeof input != "undefined")
      return input
        .replace(/\W/g, "")
        .split("")
        .map(elem => {
          if (!isNaN(elem))
            return <div className={"colorlessMana mana"}>{elem}</div>;
          switch (elem) {
            case "G":
              return <div className={"greenMana mana"} />;
              break;
            case "R":
              return <div className={"redMana mana"} />;
              break;
            case "U":
              return <div className={"blueMana mana"} />;
              break;
            case "W":
              return <div className={"whiteMana mana"} />;
              break;
            case "B":
              return <div className={"blackMana mana"} />;
              break;
          }
        });
  };

  render() {
    return (
      <div className="curtain" onClick={this.props.closeAction}>
        <div className="detail__container">
          <div
            className="detail__card"
            style={{ backgroundImage: `url(${this.state.card.imageUrl})` }}
          />
          <div className="detail__text">
            <h1 className="detail__text__header">
              {this.state.card.name}{" "}
              <div className="detail__text__header__mana">
                {this.parseManaCost(this.state.card.manaCost)}
              </div>
            </h1>
            <h2>
              {this.state.card.rarity} {this.state.card.type}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailView;
