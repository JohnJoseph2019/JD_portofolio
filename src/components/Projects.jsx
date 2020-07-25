import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <div className='outerProjectDiv' id='projects'>
      <div className='titleProjects'>Projects</div>
      {/* First Project */}
      <div className='projectsContainer'>
        <div className='center-the-projects'>
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
            <div className='projectLinks'>
              <span className='projectLinksInfo'>Github Repo:</span>
              <a
                href='https://github.com/JohnJoseph2019/JD-Instantcart-Costco'
                className='gitHubReport'>
                <img src={require('../images/GitHub-Mark-64px.png')} alt='github' />
              </a>
              <span className='projectLinksInfo'>Deploy Site:</span>
              <a href='http://jd-instacart-costco.surge.sh/welcome' className='htmlLink'>
                <img src={require('../images/pngwave.png')} alt='linkedIn' />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Second Project */}
      <div className='projectsContainer'>
        <div className='center-the-projects'>
          <img
            className='projectURLImage'
            src={require('../images/pet_care.gif')}
            alt='pet-care-website'
          />
          <div className='projectDescriptionContainer'>
            <div className='projectTitle'>Pet Care</div>
            <div className='project-Description'>
              An app where pet owners can find a sitter for their pet when needed. Now a pet owner
              can post jobs and sitter can see the upcoming jobs and accept the job. This app was
              programmed using a RESTful CRUD with user authentication as well as user verification
              to let only users only see the site.
            </div>
            <div className='projectLinks'>
              <span className='projectLinksInfo'>Github Repo:</span>
              <a href='https://github.com/JohnJoseph2019/Pet-Care' className='gitHubReport'>
                <img src={require('../images/GitHub-Mark-64px.png')} alt='github' />
              </a>
              <span className='projectLinksInfo'>Deploy Site:</span>
              <a href='http://petcareforall.surge.sh/' className='htmlLink'>
                <img src={require('../images/pngwave.png')} alt='linkedIn' />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* third Project */}
      <div className='projectsContainer'>
        <div className='center-the-projects'>
          <img
            className='projectURLImage'
            src={require('../images/eye4words.gif')}
            alt='wyw4words website'
          />
          <div className='projectDescriptionContainer'>
            <div className='projectTitle'>Eye4Words</div>
            <div className='project-Description'>
              A game where you are provided with 7 random letters and the user has to come up with
              as many words under 30 seconds. Programmed with React for the front and leveraging a
              third-party API that will return a set solution of all possible words for the set of
              letters provided.
            </div>

            <div className='projectLinks'>
              <span className='projectLinksInfo'>Github Repo:</span>
              <a href='https://github.com/JohnJoseph2019/Eye4words' className='gitHubReport'>
                <img src={require('../images/GitHub-Mark-64px.png')} alt='github' />
              </a>
              <span className='projectLinksInfo'>Deploy Site:</span>
              <a href='https://eye4words.netlify.app/' className='htmlLink'>
                <img src={require('../images/pngwave.png')} alt='linkedIn' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
