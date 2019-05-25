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
            </div>
            <div className="controls__filters">

        <label>
        <input onChange={(e) => props.filterHandler({blueFilter: e.target.checked})} type="checkbox"/>
        <span>Blue</span>
        </label>
        <label>
        <input onChange={(e) => props.filterHandler({redFilter: e.target.checked})}type="checkbox"/>
        <span>Red</span>
        </label>
        <label>
        <input onChange={(e) => props.filterHandler({whiteFilter: e.target.checked})} type="checkbox"/>
        <span>White</span>
        </label>
        <label>
        <input onChange={(e) => props.filterHandler({blackFilter: e.target.checked})} type="checkbox"/>
        <span>Black</span>
        </label>
        <label>
        <input onChange={(e) => props.filterHandler({greenFilter: e.target.checked})} type="checkbox"/>
        <span>Green</span>
        </label>
        
        </div>
        </div>
      </div>
    </div>
  );
}
    

export default Controls;
