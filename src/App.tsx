import React, { FC } from "react";
import { Container, Form, Button } from "react-bootstrap";

const App: FC = () => {
  return (
    <div className="bg-light">
      <Container fluid className="bg-success text-white">
        <h2 className="text-center py-4">TYPESCRIPT TODO</h2>
      </Container>
      <div className="w-50 mx-auto mt-5">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Task Title</Form.Label>
            <Form.Control type="text" placeholder="Type Your Task Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Task Description</Form.Label>
            <Form.Control as="textarea" placeholder="Type Your Task Description" rows={3} />
          </Form.Group>
          <Button variant="success">ADD TASK</Button>
        </Form>
      </div>
    </div>
  );
};

export default App;
