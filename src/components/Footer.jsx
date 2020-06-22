import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <div className='outerFooterMain'>
      <div className='footerLinks'>
        <NavLink to='#'>Github</NavLink>
        <NavLink to='#'>Linkedin</NavLink>
        <NavLink to='#'>Resume</NavLink>
      </div>
    </div>
  );
}
