import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

class Cards extends Component {
  state = {};

  handlClick = () => {
    console.log("Button Clicked");
  };
  render() {
    const { title } = this.props;

    return (
      <React.Fragment>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button
              className="btnCustom"
              onClick={this.handlClick}
              style={{ margin: "10px" }}
            >
              Card Link
            </Button>
            <Button href="#">Another Link</Button>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default Cards;
