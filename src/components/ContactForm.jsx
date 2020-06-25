import React from 'react';
import './ContactForm.css';

export default function contactForm() {
  return (
    <div className='contactMeContainer'>
      <div className='contactMeTitle' id='contactMe'>
        Contact Me
      </div>
      <div className='outerContactMeForm'>
        <div className='contactDescription'>
          For more information you can visit my LinkedIn or my github.
          <br />
        </div>
        <div className='contactEmail'>
          You can also reach me at my e-mail <a href='mailto:juan.del89@gmail.com'>Email</a>
        </div>
      </div>
    </div>
  );
}
