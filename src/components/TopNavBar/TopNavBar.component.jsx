import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../Logo/Logo,comonent';
import DropdownMenu from '../DropdownMenu/DropdownMenu.component';
import './TopNavBar.style.css';
//import MenuButton from '../MenuButton/MenuButton.component';

const TopNavBar = () =>{
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const handleDropdown = () => {
        console.log('test')
        if (window.innerWidth < 960) {
            setDropdown(true);
              } 
    }

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
      setDropdown(false);
        } else {
      setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
        setDropdown(false);
        } else {
        setDropdown(false);
        }
    };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          LOGO
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='#'
              className='nav-links have-submenu' 
              onClick={closeMobileMenu}
            >
              Services 
            </Link>
            <i className='fas fa-caret-down' onClick={handleDropdown} />
            {dropdown && <DropdownMenu />}
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default TopNavBar;
