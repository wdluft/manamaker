import React, { Component } from 'react';

class LandType extends Component {
  render() {
    const { landType, sourcesNeeded, color } = this.props.manaColor;

    // if (sourcesNeeded > 0) {
    return (
      <div id={`${color}-sources-needed`}>
        <p className="text-primary">
          {landType} Needed: {sourcesNeeded}
        </p>
      </div>
    );
    // } else {
    //   return null;
    // }
  }
}

export default LandType;
