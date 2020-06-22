import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className='outerNavBar'>
      <div className='navName'>Juan Delgado</div>
      <div className='contentLinks'>
        <NavLink to='#'>About Me</NavLink>
        <NavLink to='#'>Projects</NavLink>
        <NavLink to='#'>Contact Me</NavLink>
      </div>
    </div>
  );
}
