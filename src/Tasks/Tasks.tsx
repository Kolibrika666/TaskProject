import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const Tasks = () => {
    return (
        <Container fluid>
        <Row>
          <Col>Избранное</Col>
          <Col>Дела</Col>
          <Col>Новая задача</Col>
        </Row>
        <Row>
          <Col>фильтр</Col>
        </Row>
        <Row>
          <Col>Основа</Col>
        </Row>
        <Row>
          <Col>footer</Col>
        </Row>
      </Container>
    );
};

