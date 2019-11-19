import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Section from "./components/Section";
import { Grid, Button, Title } from "./styles/index";

function App() {
  return (
    <div className="App">
      <Title> styling an best practices </Title>

      <Button width="10rem">Click Me </Button>
      <Button>Click Me</Button>
      <Button>Click Me</Button>
      <Grid size="2">
        <div>
          <span>box1 </span>
        </div>
        <div>box2</div>
      </Grid>
      {/* <Section /> */}
    </div>
  );
}

export default App;
