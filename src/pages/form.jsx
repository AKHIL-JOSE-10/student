import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EmployeeForm() {
  return (
    <Container className="my-5 py-5 border rounded shadow-sm">
      <Form>
        <h2 className="text-center mb-4">Employee Information</h2>
        <Form.Group>
          <Form.Label>Field Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Field Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Designation</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Designation" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Location" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Salary" />
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default EmployeeForm;
