import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => console.log("effect"));

  return (
    <div>
      <h1>counter</h1>
      <h4>counter : {counter} </h4>
      <button onClick={() => setCounter(counter + 1)}>plus counter</button>
      <button onClick={() => setCounter(counter - 1)}>minus counter</button>
    </div>
  );
};

export default Counter;
