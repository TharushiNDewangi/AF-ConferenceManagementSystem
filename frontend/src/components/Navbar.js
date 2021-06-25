import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Dropdown, DropdownButton } from 'react-bootstrap';
// import {  DropdownItem } from 'reactstrap'
import { Button } from './Button.js';
import Dropdown from './Dropdown';


import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(false)
        }
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        SHOPDROP <i className="fab fa-typo3"></i>
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>


                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <Link to='/homee' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            >
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services <i className = 'fas fa-caret-down'/>
                            </Link>
                            {dropdown && <Dropdown/>}
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                sign-up 
                            </Link>
                        </li>
                       
                    </ul>
                   
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
