import React from 'react';
import './MainPage.css';

export default function Main() {
  return (
    <div className='aboutMeContainer'>
      <div className='outerAboutMe' id='aboutMe'>
        <div class='circularPortrait'>
          <img className='aboutMephoto' src={require('../images/aboutME.jpeg')} alt='juan' />
        </div>
        <div className='outInfo-section'>
          <div className='titleAboutMe'>About Me</div>
          <p className='informationAboutMe'>
            I am a creative, dedicated, determined, and passionate software engineer with 7 years of
            experience working with people/customers in a family own boutique. Helping is what I
            like to do and sharing is my legacy. This is how I found coding important to learn so
            that I can help people with technology and share my knowledge with people who don’t
            have access to these resources. Striving to surrounds myself with these moral and that
            embraces constant learning of new ideas
          </p>
        </div>
      </div>
    </div>
  );
}
