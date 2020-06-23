import React from 'react';
import './ContactForm.css';

export default function contactForm() {
  return (
    <div className='outerContactMeForm'>
      <div className='contactMetitle' id='contactMe'>
        Contact Me
      </div>
      <div className='contactDescription'>
        Thank You for visiting if you want more inforamtion you can visit my LinkeIn or my github.
        <br />
      </div>
      <div className='contactEmail'>
        You can also reach me at my e-mail <a href='mailto:juan.del89@gmail.com'>Email</a>
      </div>
    </div>
  );
}
