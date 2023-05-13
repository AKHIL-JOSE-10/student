import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Front() {
  return (
    <Container className="bg-primary text-white py-5">
      <Row className="justify-content-center align-items-center">
        <Col xs={10} md={6} lg={4}>
          <h1>Employee App</h1>
          <p>Welcome to the Employee App. Manage your employees with ease!</p>
          <Button variant="light">Get Started</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Front;
