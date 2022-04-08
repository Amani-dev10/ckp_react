import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Button, Form } from 'react-bootstrap';


function App() {
  return (
  <div>
  <Form>
  <Form.Group className="mb-3" className="form" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" className="form" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit" id="btn">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
