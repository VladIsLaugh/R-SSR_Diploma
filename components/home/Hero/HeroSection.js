import React from 'react';
// import '../App.css';
import { Button } from '../../shared/Button/Button';
// import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/hero.mp4' autoPlay loop muted />
      <h1>Covid-19 tracker</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nisi officiis vel, est nesciunt facere fuga! Saepe tenetur fugit quod, quisquam delectus quidem, ut, architecto ullam a nulla non dolore.</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BTN1
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          btn2 <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
