import '../componentsCss/NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-vectore.png'
const Navbar = () =>{
    return(

        
        <div class="container highlightTextOut">
            <div class='logoDiv'> 
                <img src={logo} className="logo" alt="Vite logo" />
            </div>
            <div className='navLinks'>
                <a alt="HOME">HOME</a>
                <a alt="ABOUT">ABOUT</a>
                <a alt="SERVICES" href=''>SERVICES</a>
                <a alt="CONTACT">CONTACT</a>
            </div>
            <div className='btnDiv'>
                <a className='loginBtn' alt="SIGNIN">SIGNIN</a>
            </div>
        </div>
    );
    
};

export default Navbar