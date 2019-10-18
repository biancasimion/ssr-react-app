import React, { Component } from "react";
import Hero from './HeroComponent';
import Story from './StoryComponent';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Story />
      </div>
    );
  }
}
export default App;