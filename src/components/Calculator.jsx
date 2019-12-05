import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "../components/Cards";

class Calculator extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="4">
            <Card title="Card 1"></Card>
          </Col>
          <Col sm="4">
            <Card title="card 2"></Card>
          </Col>
          <Col sm="4">
            <Card title="card 3"></Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Calculator;
