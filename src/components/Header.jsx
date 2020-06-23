import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className='outerNavBar'>
      <div className='navName'>Juan Delgado</div>
      <div className='contentLinks'>
        <a href='#aboutMe'>About Me</a>
        <a href='#projects'>Projects</a>
        <a href='#contactMe'>Contact Me</a>
      </div>
    </div>
  );
}
