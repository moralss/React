import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Users from "./components/User";

function App() {
  return (
    <div className="App">
      <h1>React hooks </h1>
      <Counter />
      <Users />
    </div>
  );
}

export default App;
