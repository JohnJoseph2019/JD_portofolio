import React from 'react';
import './MainPage.css';

export default function Main() {
  return (
    <div className='aboutMeContainer' id='aboutMe'>
      <div className='outerAboutMe'>
        <div class='circularPortrait'>
          <img className='aboutMephoto' src={require('../images/Juandel2.jpg')} alt='juan' />
        </div>
        <div className='outInfo-section'>
          <div className='titleAboutMe'>About Me</div>
          <p className='informationAboutMe'>
            I am a software engineer that likes to create, explore, and learn. Helping is what I
            like to do and sharing is my legacy. This is how I found coding very important to learn
            in today's world. I want to keep striving for this and helping the world with
            technology.
          </p>
        </div>
      </div>
    </div>
  );
}
