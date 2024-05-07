import '../componentsCss/NavBar.css';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo-vectore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [navClassName, setNavClassName] = useState('navLinks');
    const [showSignUpOptions, setShowSignUpOptions] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isDriverLoggedIn, setIsDriverLoggedIn] = useState(false);
    const [isCompanyLoggedIn, setIsCompanyLoggedIn] = useState(false);

    function getEncodedIdFromUrl() {
        const urlParts = window.location.href.split('/');
        return urlParts[urlParts.length - 1];
    }

    function decodeId(encodedId) {
        return atob(encodedId);
    }

    const encodedId = getEncodedIdFromUrl();
    const ids = encodedId;

    const toggleNav = () => {
        if (navClassName === 'navLinks') {
            setNavClassName('navLinks responsive');
        } else {
            setNavClassName('navLinks');
        }
    }

    const toggleSignUpOptions = () => {
        setShowSignUpOptions(!showSignUpOptions);
    }



    const checkToken = () => {
        const token = document.cookie.match(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        const tokenMatch = token ? token[1] : null;
        setIsUserLoggedIn(!!tokenMatch);
        const driverTokenMatch = document.cookie.match(
            /(?:(?:^|.*;\s*)drivertoken\s*=\s*([^;]*).*$)|^.*$/
        );
        const driverToken = driverTokenMatch ? driverTokenMatch[1] : null;
        setIsDriverLoggedIn(!!driverToken);
        const companyTokenMatch = document.cookie.match(
            /(?:(?:^|.*;\s*)companytoken\s*=\s*([^;]*).*$)|^.*$/
        );
        const companyToken = companyTokenMatch ? companyTokenMatch[1] : null;
        setIsCompanyLoggedIn(!!companyToken);

    };

    const handleSubmit = ()=> {
        console.log("hellow");
        if(isUserLoggedIn){
            window.location.href = `/usermainprofile/${ids}`;
        }
        if(isCompanyLoggedIn){
            window.location.href = `/companyprofile/${ids}`;
        }
        if(isDriverLoggedIn){
            window.location.href = `/driverprofile/${ids}`;
        }
    }

    const Logout = ()=>{
        
        document.cookie = 'drivertoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'companytoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.href = "/";
    }

    useEffect(() => {
        checkToken();
    }, [isUserLoggedIn, isDriverLoggedIn, isCompanyLoggedIn]);
    return (
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
            {isUserLoggedIn || isCompanyLoggedIn || isDriverLoggedIn ? (
                <><div className='userIcon'>
                    <div className="user" onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </div><button className='loginBtn font-bold mr-5 text-white' alt="SIGNUP" onClick={Logout}>Logout</button></>
            ) : (
                <div className='btnDiv'>
                    <a className='loginBtn font-bold text-white' alt="SIGNUP" onClick={toggleSignUpOptions}>SIGNUP</a>
                    {showSignUpOptions &&
                        <div className="signUpOptions">
                            <Link to={'/userLoginSignup/'} alt='USER' className='font-medium'>USER</Link>
                            <Link to={'/driverLoginSignup/'} alt='DRIVER' className='font-medium'>DRIVER</Link>
                            <Link to={'/companyLoginSignup/'} alt='COMPANY' className='font-medium'>COMPANY</Link>
                        </div>
                    }
                </div>
            )}
            <a href="javascript:void(0);" className="icon" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        </div>
    );
};

export default Navbar;
