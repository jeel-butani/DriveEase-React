import '../componentsCss/NavBar.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from '../assets/images/logo-vectore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; 
const Navbar = () =>{
    const [navClassName, setNavClassName] = useState('navLinks');
    

    const toggleNav = () => {
        console.log(navClassName);
        if (navClassName === 'navLinks') {
            setNavClassName('navLinks responsive');
        } else {
            setNavClassName('navLinks');
        }
    }

    return(
        <BrowserRouter>
            <div className="container highlightTextOut" id='navbar'> 
                <div className='logoDiv'> 
                    <img src={logo} className="logo" alt="Vite logo" />
                </div>
                <div className={navClassName}>
                    <Link to="/" alt="HOME">HOME</Link>
                    <Link to="/about" alt="ABOUT">ABOUT</Link>
                    <Link to="/services"alt="SERVICES" >SERVICES</Link>
                    <Link to="/contact"alt="CONTACT">CONTACT</Link>
                </div>
                <div className='btnDiv'>
                    <a className='loginBtn' alt="SIGNIN">SIGNIN</a>
                </div>
                <a href="javascript:void(0);" className="icon" onClick={toggleNav}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </div>
        </BrowserRouter>
    );
};

export default Navbar;
