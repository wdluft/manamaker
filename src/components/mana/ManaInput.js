import React, { Component } from 'react';

class ManaInput extends Component {
  render() {
    const { color, pips } = this.props.manaColor;
    return (
      <div id={`${color}-pips-needed`} className="input-group">
        <label>
          <span>{color}</span> Pips
        </label>
        <input
          type="number"
          name={color}
          min="0"
          value={pips}
          onChange={this.props.updatePips}
        />
      </div>
    );
  }
}

export default ManaInput;
