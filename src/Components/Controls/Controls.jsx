import React from "react";
import "../reset.scss";
import "./Controls.scss";
import Filters from './Filters'


const Controls = (props) => {
  return (
    <div className="controls__main">
      <div className="controls__container">
        <h1>MTG Card Search</h1>

        <div className="controls__controls">
            <div className="controls__controls__searchInput">
              <input onChange={props.inputHandler} value={props.searchInput} type="text" placeholder="Enter card name..." />
              {/* <button onClick={this.searchHandler}>Search</button> */}
            </div>
            <Filters 
            blueFilter ={props.blueFilter}
            blackFilter = {props.blackFilter}
            greenFilter = {props.greenFilter}
            whiteFilter = {props.whiteFilter}
            redFilter = {props.redFilter}
            colorlessFilter = {props.colorlessFilter}
            />
        </div>
      </div>
    </div>
  );
}
    

export default Controls;
