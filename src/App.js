import React, { Component } from 'react';
import './styles/App.css';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ManaInputs from './components/mana/ManaInputs';
import LandTypesNeeded from './components/mana/LandTypesNeeded';
import TotalLandsNeeded from './components/mana/TotalLandsInput';

class App extends Component {
  state = {
    landsNeeded: 17,
    manaColors: [
      {
        id: 1,
        color: 'white',
        landType: 'Plains',
        pips: 0,
        sourcesNeeded: 0
      },
      {
        id: 2,
        color: 'blue',
        landType: 'Islands',
        pips: 0,
        sourcesNeeded: 0
      },
      {
        id: 3,
        color: 'black',
        landType: 'Swamps',
        pips: 0,
        sourcesNeeded: 0
      },
      {
        id: 4,
        color: 'red',
        landType: 'Mountains',
        pips: 0,
        sourcesNeeded: 0
      },
      {
        id: 5,
        color: 'green',
        landType: 'Forests',
        pips: 0,
        sourcesNeeded: 0
      }
    ]
  };

  updateLands = e => {
    let newColors = [...this.state.manaColors];

    // Calculate total pips
    let totalPips = 0;
    newColors.forEach(color => {
      totalPips += Number(color.pips);
    });

    // Calculate sourcesNeeded
    newColors.forEach(color => {
      color.sourcesNeeded = Math.round(
        (color.pips / totalPips) * e.target.value
      );
    });

    this.setState({ landsNeeded: e.target.value, manaColors: newColors });
  };

  updatePips = e => {
    if (e.target.name === 'landsNeeded') {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    let totalPips = 0;

    // Update pips in manaColors
    let newColors = this.state.manaColors.map(color => {
      if (color.color === e.target.name) {
        color.pips = e.target.value;
      }
      return color;
    });

    // Calculate total pips
    newColors.forEach(color => {
      totalPips += Number(color.pips);
    });

    // Calculate sourcesNeeded
    newColors.forEach(color => {
      color.sourcesNeeded = Math.round(
        (color.pips / totalPips) * this.state.landsNeeded
      );
    });

    this.setState({
      manaColors: newColors
    });
  };

  resetInputs = e => {
    e.preventDefault();

    this.setState({
      landsNeeded: 17,
      manaColors: [
        {
          id: 1,
          color: 'white',
          landType: 'Plains',
          pips: 0,
          sourcesNeeded: 0
        },
        {
          id: 2,
          color: 'blue',
          landType: 'Islands',
          pips: 0,
          sourcesNeeded: 0
        },
        {
          id: 3,
          color: 'black',
          landType: 'Swamps',
          pips: 0,
          sourcesNeeded: 0
        },
        {
          id: 4,
          color: 'red',
          landType: 'Mountains',
          pips: 0,
          sourcesNeeded: 0
        },
        {
          id: 5,
          color: 'green',
          landType: 'Forests',
          pips: 0,
          sourcesNeeded: 0
        }
      ]
    });
  };

  render() {
    const { landsNeeded, manaColors } = this.state;

    return (
      <div className="App">
        <div className="container">
          <Header />
          <div className="input-container">
            <TotalLandsNeeded
              landsNeeded={landsNeeded}
              updateLands={this.updateLands}
            />
            <ManaInputs manaColors={manaColors} updatePips={this.updatePips} />
            <div id="mana-bottom-line" className="bottom-line my-1" />
            <LandTypesNeeded manaColors={manaColors} />
            <button id="reset-btn" className="btn" onClick={this.resetInputs}>
              Reset
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
