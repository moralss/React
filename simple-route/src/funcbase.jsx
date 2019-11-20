import React, { Component } from "react";
import First from "./first";
import Second from "./second";
const [page, setNewPage] = useState(1);

const App = () => {
  const renderNextPage = () => {
    if (page == 1) {
      return <First />;
    }
    if (page == 2) {
      return <Second />;
    }
  };

  return (
    <div className="App">
      <ul>
        <button onClick={() => setNewPage(1)}>home </button>
        <button onClick={() => setNewPage(2)}> Cites </button>
      </ul>
      {renderNextPage()}
    </div>
  );
};

export default App;
