import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "react-bootstrap";
import { Alert } from "react-bootstrap";

const HelloWorld = () => {
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1>Hello to the react</h1>
          <button className="btn-danger">Danger Button</button>
          <Alert></Alert>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default HelloWorld;
