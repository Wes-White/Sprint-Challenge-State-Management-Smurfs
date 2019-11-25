import React, { Component } from "react";
import "./App.css";
import SmurfCard from "./SmurfCard";
import smurf from "../img/smurfs.png";
class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={require("../img/smurfs.png")}></img>

        <SmurfCard />
      </div>
    );
  }
}

export default App;
