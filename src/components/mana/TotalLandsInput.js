import React, { Component } from 'react';

class TotalLandsInput extends Component {
  render() {
    const { landsNeeded } = this.props;

    return (
      <div id="lands-needed" className="input-group">
        <label>Lands Needed</label>
        <input
          type="number"
          name="landsNeeded"
          min="0"
          value={landsNeeded}
          onChange={this.props.updateLands}
        />
      </div>
    );
  }
}

export default TotalLandsInput;
