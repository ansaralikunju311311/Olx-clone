
import olxlogo from '../../assets/olxlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import sell from '../../assets/sell.png';
import './NavBar.css';

const NavBar = () => {
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

      <div className='navbar-options'>
        <p className='Navbar-login'>Login</p>
        <div className='sell-button'>
          <img src={sell} alt="Sell" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

