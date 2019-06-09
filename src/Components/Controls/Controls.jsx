import React from "react";
import "../reset.scss";
import "./Controls.scss";
import 'pretty-checkbox';
import { Checkbox } from 'pretty-checkbox-react';

const hopscotch = require('hopscotch');



const Controls = (props) => {
  return (
    <div className="controls__main">
      <div className="controls__container">
        <h1 className="title"><span className="logo">MTG</span> <span className="subtitle">Card Search</span></h1>

        <div className="controls__controls">
          <div className="controls__controls__searchInput">
          <div className="inputWrapper">
            
                  <input className="controls__controls__searchInput__input" onChange={props.inputHandler} value={props.searchInput} type="text" placeholder="Enter card name..." />
                  <span className="input__focusBorder">
                  <i></i>
                  </span>
          </div>
          </div>

          <div className="controls__filters">
              <Checkbox color="warning" shape="round" animation="smooth" style="thick" onChange={(e) => props.filterHandler({ blueFilter: e.target.checked })} type="checkbox">Blue</Checkbox>
              <Checkbox color="warning" shape="round" animation="smooth" style="thick" onChange={(e) => props.filterHandler({ redFilter: e.target.checked })} type="checkbox">Red</Checkbox>
              <Checkbox color="warning" shape="round" animation="smooth" style="thick" onChange={(e) => props.filterHandler({ whiteFilter: e.target.checked })} type="checkbox">White</Checkbox>
              <Checkbox color="warning" shape="round" animation="smooth" style="thick" onChange={(e) => props.filterHandler({ blackFilter: e.target.checked })} type="checkbox">Black</Checkbox>
              <Checkbox color="warning" shape="round" animation="smooth" style="thick" onChange={(e) => props.filterHandler({ greenFilter: e.target.checked })} type="checkbox">Green</Checkbox>

          </div>
        </div>
      </div>
      <div className="controls__hide__pip" id="controls__hide__pip" onClick={() => {
        hopscotch.endTour();
        if (document.querySelector('.controls__main').classList.contains("active")) {
          document.querySelector('.controls__main').classList.remove('active')
        } else {
          document.querySelector('.controls__main').classList.add('active')
        }
      }}></div>
    </div>
  );
}


export default Controls;
