import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='outerNavBar'>
      <div className='navName'>Juan Delgado</div>
      <div className='contentLinks'>
        <a href='#aboutMe' className='headerCSS'>
          About Me
        </a>
        <a href='#projects' className='headerCSS'>
          Projects
        </a>
        <a href='#contactMe' className='headerCSS'>
          Contact Me
        </a>
      </div>
    </div>
  );
}
