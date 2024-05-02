import '../componentsCss/NavBar.css';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo-vectore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from "react";

const Navbar = () =>{
    const [navClassName, setNavClassName] = useState('navLinks');
    const [showSignUpOptions, setShowSignUpOptions] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isDriverLoggedIn, setIsDriverLoggedIn] = useState(false);
    const [isCompanyLoggedIn, setIsCompanyLoggedIn] = useState(false);

    const toggleNav = () => {
        if (navClassName === 'navLinks' ) {
            setNavClassName('navLinks responsive');
        } else {
            setNavClassName('navLinks');
        }
    }

    const toggleSignUpOptions = () => {
        setShowSignUpOptions(!showSignUpOptions);
    }

    

    const checkToken = () => {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        setIsUserLoggedIn(!!token); 
        const driverTokenMatch = document.cookie.match(
            /(?:(?:^|.*;\s*)drivertoken\s*=\s*([^;]*).*$)|^.*$/
        );
        setIsDriverLoggedIn(!!driverTokenMatch); 
        const companyTokenMatch = document.cookie.match(
            /(?:(?:^|.*;\s*)companytoken\s*=\s*([^;]*).*$)|^.*$/
        );
        const companyToken = companyTokenMatch ? companyTokenMatch[1] : null;
        setIsCompanyLoggedIn(!!companyToken);

        console.log(isUserLoggedIn);
        console.log(isDriverLoggedIn);
        console.log(isCompanyLoggedIn);
    };

    useEffect(() => {
        checkToken();
    }, []); 
    return(
        <div className="container-nav highlightTextOut" id='navbar'> 
            <div className='logoDiv'> 
                <Link to="/"><img src={logo} className="logo" alt="Vite logo" /></Link>
                
            </div>
            <div className={navClassName}>
                <Link to="/" alt="HOME" className='font-medium'>HOME</Link>
                <Link to="/about" alt="ABOUT" className='font-medium'>ABOUT</Link>
                <Link to="/services" alt="SERVICES" className='font-medium'>SERVICES</Link>
                <Link to="/contact" alt="CONTACT" className='font-medium'>CONTACT</Link>
            </div>
            {isUserLoggedIn || isCompanyLoggedIn || isDriverLoggedIn ?(
            <div className='btnDiv'>
                <a className='loginBtn font-bold' alt="SIGNUP" onClick={toggleSignUpOptions}>SIGNUP</a>
                {showSignUpOptions && 
                    <div className="signUpOptions">
                        <Link to="/userLoginSignup" alt='USER' className='font-medium'>USER</Link>
                        <Link to='/driverLoginSignup' alt='DRIVER' className='font-medium'>DRIVER</Link>
                        <Link to='/companyLoginSignup' alt='COMPANY' className='font-medium'>COMPANY</Link>
                    </div>
                }
            </div>
            ):(
                <div className='userIcon'>
                    <a href="" className="user">
                    <FontAwesomeIcon icon={faUser} />
                    </a>
                </div> 
            )}
            <a href="javascript:void(0);" className="icon" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        </div>
    );
};

export default Navbar;
