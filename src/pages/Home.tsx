import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import images from '../images/gumzo.png';

const Home = () => {
  return (
    <>
      <Container>
        <section className='text-center'>
          <img src={images} className='img-responsive' alt='gumzo chat' />
        </section>
      </Container>
    </>
  );
};

export default Home;
