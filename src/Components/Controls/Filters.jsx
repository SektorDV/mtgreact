import React from 'react';
import './Filters.scss'
const Filters = () => {
    return (
        <div className="controls__filters">
        <label>
        <input type="checkbox"/>
        <span>All</span>
        </label>
        <label>
        <input type="checkbox"/>
        <span>Colorless</span>
        </label>
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
      
        
        </div>
    )
}

export default Filters;