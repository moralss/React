import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [names, addName] = useState([]);

  const removeName = choiceName => {
    console.log("chocie name", choiceName);
    console.log(names.filter(name => name == choiceName));
  };

  return (
    <div className="App">
      <header>
        <p>you clicked {count}</p>
        <button onClick={() => setCount(count + 1)}>plus</button>

        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        {names.map(name => (
          <div>
            <li> {name} </li>
            <button onClick={() => removeName(name)}> X </button>
          </div>
        ))}

        <button onClick={() => addName([...names, name])}> Save </button>
      </header>
    </div>
  );
}

export default App;
