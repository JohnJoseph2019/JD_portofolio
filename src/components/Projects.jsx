import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <div className='outerProjectDiv'>
      <div className='titleProjects' id='projects'>
        Projects
      </div>
      {/* First Project */}
      <div className='projectsContainer'>
        <img
          className='projectURLImage'
          src={require('../images/instantCart.gif')}
          alt='petcare website'
        />
        <div className='projectDescriptionContainer'>
          <div className='projectTitle'>InstantCart</div>
          <div className='project-Description'>
            A team effort to recreate the Instacart desktop and mobile application. Instacart is a
            grocery delivery and pick-up service. The team consists of 5 software engineers and 3
            user experience (UX) designers. The developers and designers of this recreation are in
            no way affiliated with Instacart or the product development teams of its partnered
            grocery stores.
          </div>
          <div className='projectLinks'></div>
        </div>
      </div>
      {/* Second Project */}
      <div className='projectsContainer'>
        <img
          className='projectURLImage'
          src={require('../images/pet_care.png')}
          alt='pet-care-website'
        />
        <div className='projectDescriptionContainer'>
          <div className='projectTitle'>Pet Care</div>
          <div className='project-Description'>
            A team effort to recreate the Instacart desktop and mobile application. Instacart is a
            grocery delivery and pick-up service. The team consists of 5 software engineers and 3
            user experience (UX) designers. The developers and designers of this recreation are in
            no way affiliated with Instacart or the product development teams of its partnered
            grocery stores.
          </div>
          <div className='projectLinks'></div>
        </div>
      </div>
      {/* third Project */}
      <div className='projectsContainer'>
        <img
          className='projectURLImage'
          src={require('../images/eye4words.png')}
          alt='wyw4words website'
        />
        <div className='projectDescriptionContainer'>
          <div className='projectTitle'>Eye4Words</div>
          <div className='project-Description'>
            A team effort to recreate the Instacart desktop and mobile application. Instacart is a
            grocery delivery and pick-up service. The team consists of 5 software engineers and 3
            user experience (UX) designers. The developers and designers of this recreation are in
            no way affiliated with Instacart or the product development teams of its partnered
            grocery stores.
          </div>
          <div className='projectLinks'></div>
        </div>
      </div>
    </div>
  );
}
