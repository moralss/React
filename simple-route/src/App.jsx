import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import First from "./first";
import Second from "./second";

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 1
    };
  }

  determineNextPage() {
    const { page } = this.state;

    if (page == 1) {
      return <First />;
    }
    if (page == 2) {
      return <Second />;
    }
  }

  changePage(chosenPage) {
    this.setState({ page: chosenPage });
  }

  render() {
    return (
      <div>
        <ul>
          <button onClick={() => this.changePage(1)}>home </button>
          <button onClick={() => this.changePage(2)}> Cites </button>
        </ul>
        {this.determineNextPage()}
      </div>
    );
  }
}

//   const [page, setNewPage] = useState(1);

//   const switchPages = () => {
//     if (page == 1) {
//       return <First />;
//     }
//     if (page == 2) {
//       return <Second />;
//     }
//   };

//   const changePage = chosenPage => {
//     setNewPage(chosenPage);
//   };

//   return (
//     <div className="App">
//       <ul>
//         <button onClick={() => changePage(1)}>home </button>
//         <button onClick={() => changePage(2)}> Cites </button>
//       </ul>
//       {switchPages()}
//     </div>
//   );
// };

export default App;
