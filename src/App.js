import React, { Component } from "react";
import NavBar from "./components/Navbar";
import Panel from "./components/Panel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Panel />
      </div>
    );
  }
}

export default App;
