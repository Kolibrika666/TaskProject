import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const TaskList = () => {
    return (

        <Container fluid>
        <Row>
          <Col>task1</Col>
          <Col>task2</Col>
          <Col>task3</Col>
        </Row>
      </Container>
    );
};

