import React from 'react';
import { Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Login = () => {
  return (
    <div>
      <section>
        <Container>
          <Form className='bg-light shadow-lg mb-3 p-5'>
            {/* ENTER EMAIL */}
            <Form.Group className='mb-3'>
              <Form.Label>Email</Form.Label>
              <FloatingLabel
                controlId='floatingTextArea'
                label='Enter Email'
                className='mb-3 text-muted'
              >
                <Form.Control
                  type='name'
                  placeholder='Enter your Email'
                ></Form.Control>
              </FloatingLabel>
            </Form.Group>
            {/* ENTER PASSWORD */}
            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <FloatingLabel
                controlId='floatingTextArea'
                label='Enter Password'
                className='mb-3 text-muted'
              >
                <Form.Control
                  type='name'
                  placeholder='Enter Password'
                ></Form.Control>
              </FloatingLabel>
            </Form.Group>
            {/* BUTTON */}
            <Button type='submit'>Login</Button>
          </Form>
        </Container>
      </section>
    </div>
  );
};

export default Login;
