import React, { Component } from 'react';
import List from './Components/Lists'
import './App.css';
// reate an app where there is an array of data on state that is then shown on the DOM as a list. The array of data can be as simple as an array of strings. The list can be as simple as a list of <h2> elements.

class App extends Component {
  constructor() {
    super();

    this.state = {
      drugDealers: [
        {
          id: 1,
          name: 'D-Boy',
          product: "Dog-Food, Marijuana, cbd",
          quaility: 66
        },
        {
          id: 2,
          name: 'Snoops',
          products: ' Coke, Meth, xtc',
          quaility: 79

        },
        {
          id: 3,
          name: 'Moe',
          products: ' Coke, White-Girl, xtc',
          quaility: 79

        },
        {
          id: 4,
          name: 'Snake-low',
          products: ' Coke, Adderall, xtc',
          quaility: 79

        },
        {
          id: 5,
          name: 'Baby',
          products: ' Coke, Opium, xtc',
          quaility: 79

        },
        {
          id: 2,
          name: 'Snoops',
          products: ' Coke, ktratom, xtc',
          quaility: 33
        }

      ],

      emptyList: []

    }
  }
  handleClick(e) {
    this.setState({ emptyList: this.state.drugDealers })
  }


  render() {
    const { drug } = this.state.drugDealers
    return (
      <div>
        <List thing={this.state.emptyList} />
        <button onClick={(e) => { this.handleClick(e) }}>Click Me to see List</button>
      </div>
    )
  }
}



export default App;
