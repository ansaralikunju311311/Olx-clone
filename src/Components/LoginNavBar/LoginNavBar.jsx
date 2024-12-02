import  { useState } from 'react';
import olxlogo from '../../assets/olxlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import sell from '../../assets/sell.png';
import LogiSignButton from './LogiSignButton';
import Title from '../Title/Title';
import Banner from '../Banner/Banner';
import './LoginNavBar.css';
import Footer from '../Footer/Footer';
import DummyPost from '../DummyPost/DummyPost';
import BottomFooter from '../BottomFooter/BottomFooter';

const LoginNavBar = () => {
  const [showLoginSign, setShowLoginSign] = useState(false);

  const handleProfileClick = () => {
    setShowLoginSign(!showLoginSign); 
  };

  return (
    <>
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={olxlogo} alt="OLX Logo" />
      </div>

      <div className='navbar-location'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <input type="text" value="India" className='location-input' readOnly />
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

     

      <div className='navbar-profile' onClick={handleProfileClick}>
        <FontAwesomeIcon icon={faUser} className='user-icon' />
        <FontAwesomeIcon icon={faAngleDown} className='dropdown-icon' />
        {/* Conditionally render LogiSignButton */}
        {showLoginSign && <LogiSignButton />}
      </div>

      <div className='navbar-options'>
        <div className='sell-button'>
          <img src={sell} alt="Sell" />
        </div>
      </div>

    </div>
    <Title/>
    <Banner/>
    <DummyPost/>
    <Footer/>
    <BottomFooter/>
    </>
  );
};

export default LoginNavBar;



