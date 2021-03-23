import React from "react";
import { Card } from "react-bootstrap";

const BookCard = ({ title, image, category }) => {
  return (
    <Card
      style={{ width: "18rem", backgroundColor: "gray", height: "500px" }}
      className="mt-2 mb-2"
    >
      <Card.Img style={{ height: "350px" }} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <span className="badge badge-warning">
          <Card.Text>{category}</Card.Text>
        </span>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
