import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import HelloWorld from "./components/HelloWorld";
import Paragraph from "./components/paraGraph";
import { Container } from "react-bootstrap";
import Calculator from "./components/Calculator";
import Students from "./components/students";

function App() {
  return (
    <div className="App">
      <Container>
        <Students></Students>
      </Container>
    </div>
  );
}

export default App;
