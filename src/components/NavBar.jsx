import '../componentsCss/NavBar.css';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo-vectore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; 

const Navbar = () =>{
    const [navClassName, setNavClassName] = useState('navLinks');
    const [showSignUpOptions, setShowSignUpOptions] = useState(false);

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
            <div className='btnDiv'>
                <a className='loginBtn font-bold' alt="SIGNUP" onClick={toggleSignUpOptions}>SIGNUP</a>
                {showSignUpOptions && 
                    <div className="signUpOptions">
                        <Link to="/loginSignup" alt='USER' className='font-medium'>USER</Link>
                        <a alt='DRIVER' className='font-medium'>DRIVER</a>
                        <a alt='COMPANY' className='font-medium'>COMPANY</a>
                    </div>
                }
            </div>
            <a href="javascript:void(0);" className="icon" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        </div>
    );
};

export default Navbar;
