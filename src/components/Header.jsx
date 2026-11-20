import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import DropDown from '../shared/DropDown';

export default function Header() {
    return (
        <div className='header'>
            <div className='outerNavBar'>
                <div className='navName'>Juan Delgado</div>
                <DropDown />
                <div className='contentLinks'>
                    <NavLink to='/' className='headerCSS'>
                        About Me
                    </NavLink>
                    <NavLink to='/projects' className='headerCSS'>
                        Projects
                    </NavLink>
                    <NavLink to='/contact' className='headerCSS'>
                        Contact Me
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
