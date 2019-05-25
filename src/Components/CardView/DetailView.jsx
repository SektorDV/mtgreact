import React, { Component } from "react";
const stringReplace = require('react-string-replace');

const CardText = (props) => {

  if (typeof props.text == 'undefined') return null;
  let parsed = stringReplace(props.text, '\n', (match, index) => <br />);

  parsed = stringReplace(parsed, '{T}', () => <div className="icon icon__tap" />);
  parsed = stringReplace(parsed, '{W}', () => <div className="whiteMana mana" />);
  parsed = stringReplace(parsed, '{B}', () => <div className="blackMana mana" />);
  parsed = stringReplace(parsed, '{R}', () => <div className="redMana mana" />);
  parsed = stringReplace(parsed, '{G}', () => <div className="greenMana mana" />);
  parsed = stringReplace(parsed, '{U}', () => <div className="blueMana mana" />);
  parsed = stringReplace(parsed, '{C}', () => <div className="colorlessMana mana">1</div>);
  parsed = stringReplace(parsed, '{X}', () => <div className="colorlessMana mana">X</div>);
  parsed = stringReplace(parsed, /({\d})/g, (match) => <div className="colorlessMana mana">{match.replace(/\W/g, "")}</div>);
  
  return(
    <div>
      {parsed}
    </div>
  )
}

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      card: props.card
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
        .map((elem, index) => {
          if (!isNaN(elem))
            return <div key={index} className={"colorlessMana mana"}>{elem}</div>;
          switch (elem) {
            case "G":
              return <div key={index} className={"greenMana mana"} />;
            case "R":
              return <div key={index} className={"redMana mana"} />;
            case "U":
              return <div key={index} className={"blueMana mana"} />;
            case "W":
              return <div key={index} className={"whiteMana mana"} />;
            case "B":
              return <div key={index} className={"blackMana mana"} />;
              default:
              return;
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
            {this.state.card.toughness == null ? null : <p>
              {this.state.card.power}/{this.state.card.toughness}
            </p>}
            <div className="detail__text__text">
              <CardText text={this.state.card.text} />
            </div>
            <p className="detail__text__flavorText">
              {this.state.card.flavor}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailView;
