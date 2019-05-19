import React from "react";
import "../reset.scss";
import "./Controls.scss";


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
            <div className="controls__filters">

        <label>
        <input type="checkbox"/>
        <span>Blue</span>
        </label>
        <label>
        <input type="checkbox"/>
        <span>Red</span>
        </label>
        <label>
        <input type="checkbox"/>
        <span>White</span>
        </label>
        <label>
        <input type="checkbox"/>
        <span>Black</span>
        </label>
        <label>
        <input type="checkbox"/>
        <span>Green</span>
        </label>
        <label>
        <input type="checkbox"/>
        <span>Colorless</span>
        </label>
        
        </div>
        </div>
      </div>
    </div>
  );
}
    

export default Controls;
