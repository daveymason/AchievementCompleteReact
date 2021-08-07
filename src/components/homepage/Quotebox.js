import React from "react";
import { Container, Card, CardBody, } from "reactstrap";

const QuoteBox = () => {
  return (
    <Container>
        <Card className="shadow my-5">
          <CardBody className="card-body">
            <blockquote className="blockquote mb-0 text-center">
              <p className="lead">
                <em>
                  "Productivity is never an accident. It is always the result of
                  a commitment to excellence, intelligent planning, and focused
                  effort."
                </em>
              </p>
              <p className="blockquote-footer">
                <cite title="Source Title">Paul J. Meyer</cite>
              </p>
            </blockquote>
          </CardBody>
        </Card>
    </Container>
  );
};

export default QuoteBox;
