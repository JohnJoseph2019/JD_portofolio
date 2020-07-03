import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='outerFooterMain'>
      <a href='https://github.com/JohnJoseph2019' className='gitHub'>
        <img src={require('../images/GitHub-Mark-64px.png')} alt='github' />
      </a>
      <a href='https://www.linkedin.com/in/jj-delgado/' className='linkedIn'>
        <img src={require('../images/linkedin.png')} alt='linkedIn' />
      </a>
      <a
        href='https://www.docdroid.net/7o2rTgq/juan-delgado-resume-june-2020-pdf'
        className='resume_PDF'>
        <img src={require('../images/resume_logo.png')} alt='resume_pdf' />
      </a>
    </div>
  );
}
