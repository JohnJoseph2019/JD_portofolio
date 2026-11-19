import React from 'react';
import './Footer.css';
import gitHub from '../images/64439.png';
import linkedIn from '../images/linkedin.png';
import resume from '../images/resume_logo.png';

export default function Footer() {
    return (
        <div className='outerFooterMain'>
            <a href='https://github.com/JohnJoseph2019' className='gitHub'>
                <img src={gitHub} alt='github' />
            </a>
            <a
                href='https://www.linkedin.com/in/jj-delgado/'
                className='linkedIn'>
                <img src={linkedIn} alt='linkedIn' />
            </a>
            <a
                href='https://www.docdroid.net/7o2rTgq/juan-delgado-resume-june-2020-pdf'
                className='resume_PDF'>
                <img src={resume} alt='resume_pdf' />
            </a>
        </div>
    );
}
