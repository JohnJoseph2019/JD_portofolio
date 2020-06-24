import React from 'react';
import './MainPage.css';

export default function Main() {
  return (
    <div className='aboutMeContainer' id='aboutMe'>
      <div className='outerAboutMe'>
        <div class='circularPortrait'>
          <img className='aboutMephoto' src={require('../images/aboutME.jpeg')} alt='juan' />
        </div>
        <div className='outInfo-section'>
          <div className='titleAboutMe'>About Me</div>
          <p className='informationAboutMe'>
            I am software engineer that likes to create , break, and learn. Helping is what I like
            to do and sharing is my legacy. This is how I found coding to very important to learn
            for today's world. Without it you wouldn't be here.
          </p>
        </div>
      </div>
    </div>
  );
}
