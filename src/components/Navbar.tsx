import React from 'react';
import { Container } from 'react-bootstrap';
import { Navbar as NavbarBS } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='mb-5'>
      <NavbarBS className='bg-white shadow-sm'>
        <Container>
          <h3>
            <Nav.Link href='/'>Gumzo</Nav.Link>
          </h3>
          <div style={{ display: 'flex' }}>
            <Nav.Link href='register' style={{ marginRight: '2rem' }}>
              Register
            </Nav.Link>
            <Nav.Link href='login'>Login</Nav.Link>
          </div>
        </Container>
      </NavbarBS>
    </nav>
  );
};

export default Navbar;
