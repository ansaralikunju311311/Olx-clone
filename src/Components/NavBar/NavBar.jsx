
import olxlogo from '../../assets/olxlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMessage, faBell,faUser } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';

import sell from '../../assets/sell.png';
import './NavBar.css';

const NavBar = () => {
  // const navigate = useNavigate();
  const handlelogout = () => {
    console.log('logout');
    window.location.href = '/login';
  }
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={olxlogo} alt="OLX Logo" />
      </div>

      <div className='navbar-location'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <input type="text" value="India" className='location-input' />
        <FontAwesomeIcon icon={faAngleDown} className='dropdown-icon' />
      </div>

      
      <div className='navbar-search'>
        <input type="text" placeholder="Find Cars, Mobile Phones and more..." className='search-input' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      </div>

      
      <div className='navbar-language'>
        <p>ENGLISH</p>
        <FontAwesomeIcon icon={faAngleDown} className='dropdown-icon' />
      </div>


               <div className='navbar-message'>
        <FontAwesomeIcon icon={faMessage} className='message-icon' />
      </div> 

       <div className='navbar-notification'>
        <FontAwesomeIcon icon={faBell} className='notification-icon' />
      </div>
      <div className='navbar-profilelog'>
      <FontAwesomeIcon icon={faUser} className='user-icon' />
      <FontAwesomeIcon icon={faAngleDown} className='dropdown-icon' />
      <button className='Navbar-logout' onClick={handlelogout}>Logout</button>
      </div>

      <div className='navbar-options'>
        {/* <p className='Navbar-login'>Login</p> */}
        <div className='sell-button'>
          <img src={sell} alt="Sell" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

