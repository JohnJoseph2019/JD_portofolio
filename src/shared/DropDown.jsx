import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './DropDown.css';

export default class DropDown extends Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({displayMenu: true}, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({displayMenu: false}, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    render() {
        return (
            <div className='dropdown'>
                <div className='button' onClick={this.showDropdownMenu}>
                    Menu
                </div>
                {this.state.displayMenu ? (
                    <ul>
                        <li>
                            <NavLink to='/'>About Me</NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects'>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact Me</NavLink>
                        </li>
                    </ul>
                ) : null}
            </div>
        );
    }
}
