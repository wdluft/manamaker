import React, { Component } from 'react';
import LandType from './LandType';

class LandTypesNeeded extends Component {
  render() {
    const { manaColors } = this.props;

    return manaColors.map(manaColor => (
      <LandType key={manaColor.id} manaColor={manaColor} />
    ));
  }
}

export default LandTypesNeeded;
