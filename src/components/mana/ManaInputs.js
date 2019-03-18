import React, { Component } from 'react';
import ManaInput from './ManaInput';

class ManaInputs extends Component {
  render() {
    const { manaColors } = this.props;

    return manaColors.map(manaColor => (
      <ManaInput
        key={manaColor.id}
        manaColor={manaColor}
        updatePips={this.props.updatePips}
      />
    ));
  }
}

export default ManaInputs;
