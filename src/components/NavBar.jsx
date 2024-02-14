import '../componentsCss/NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-vectore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; // Import useState hook

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
        <div className="container highlightTextOut" id='navbar'> 
            <div className='logoDiv'> 
                <img src={logo} className="logo" alt="Vite logo" />
            </div>
            <div className={navClassName}>
                <a alt="HOME"><Link className="nav-link" to="/">Home</Link></a>
                <a alt="ABOUT">ABOUT</a>
                <a alt="SERVICES" href=''>SERVICES</a>
                <a alt="CONTACT">CONTACT</a>
            </div>
            <div className='btnDiv'>
                <a className='loginBtn' alt="SIGNIN">SIGNIN</a>
            </div>
            <a href="javascript:void(0);" className="icon" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        </div>
    );
};

export default Navbar;
