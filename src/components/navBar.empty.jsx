import '../componentsCss/NavBar.css';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo-vectore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const NavBarEmpty = ()=> {
  return (
    <>
    <div className="container-nav highlightTextOut" id='navbar'>
        <div className='logoDiv'>
          <Link to="/"><img src={logo} className="logo" alt="Vite logo" /></Link>

        </div>
        <div className='userIcon'>
          <a href="" className="user">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </div>

    </div>
    </>
  )
}

export default NavBarEmpty