import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";
import Lamp from "./Lamp";
import GenerateEmployee  from  './GenerateEmployee';
import DisplaySimpson from './DisplaySimpson';
import GenerateSimpson from './GenerateSimpson';

const sampleSimpson= {
  image: 'https://randomuser.me/api/portraits/med/men/66.jpg',
  character: "Homer",
  characterDirection: "bleu",
  quote: "Je ne suis pas un simpson",
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: true,
      simpson: this,
    };
  }
  changeColor=() => {
    this.setState({ 
      logo: !this.state.logo
  });
  console.log(this.state.logo)

}

getSimpson() {
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response  =>  response.json())
    .then(data  => {
      this.setState({
        simpson:  data[0],
      });
  });
}



  render() {
    const butt = this.state.logo ? 'App-logo' : 'App-logo2';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={butt} alt="logo" />
          <button onClick={this.changeColor}>{butt}</button>
         
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <GenerateEmployee  selectEmployee={() =>  this.getEmployee()}  />
        <GenerateSimpson selectSimpson={() => this.getSimpson()}/>
        <DisplaySimpson  simpson={this.state.simpson}/>
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