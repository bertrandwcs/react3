import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
  constructor (){
    super();
    this.state ={
      working:false
    }
  }

  workedClick= () => {this.setState({working:!this.state.working})}

  render() {
    let className = 'App-logo';
    if (this.state.working) {
    className += ' working';
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={className} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Lamp on />
        <Lamp />
        <button onClick={this.workedClick}>Donuts?!</button>
        <Quotes/>
      </div>
    );
  }
}

export default App;
