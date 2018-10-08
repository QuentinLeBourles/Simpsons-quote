import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: true
    };
  }
  changeColor=() => {
    this.setState({ 
      logo: !this.state.logo
  });
  console.log(this.state.logo)
}


  render() {
    const butt = this.state.logo ? 'App-logo' : 'App-logo2';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={butt} alt="logo" />
          <button onClick={this.changeColor}>Working</button>
         
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Lamp />
        <Lamp on />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
        
      </div>
    );
  }
}

export default App;