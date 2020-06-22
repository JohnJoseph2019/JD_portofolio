import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <div className='outerProjectDiv'>
      <div className='titleProjects'>Projects</div>
      <div className='projectsContainer'>
        <img
          className='projectURLImage'
          src={require('../images/instantCart.gif')}
          alt='petcare website'
        />
        <div className='projectContainer'>
          <div className='projectTitle'>InstantCart</div>
          <div className='project Description'></div>
          <div className='projectLinks'></div>
        </div>
      </div>
    </div>
  );
}
