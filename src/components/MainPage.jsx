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
          <div className='titleAboutMe'>Juan Delgado</div>
          <p className='informationAboutMe'>
            I am a software engineer that likes to create, explore, and learn. Coding has become a
            catalyst for me to understand today’s technology driven world. Helping is what I like to
            do and sharing is my legacy. I will continue to strive for this and help improve our
            world for the coming generations.
          </p>
        </div>
      </div>
    </div>
  );
}
