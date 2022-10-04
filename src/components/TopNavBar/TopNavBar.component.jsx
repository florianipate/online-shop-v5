import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../Logo/Logo,comonent';
import DropdownMenu from '../DropdownMenu/DropdownMenu.component';
import './TopNavBar.style.css';
//import MenuButton from '../MenuButton/MenuButton.component';

const TopNavBar = () =>{
    const [click, setClick] = useState(false);
    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () =>{
        if(window.innerWidth < 960) {
            setDropdown(false);

        } else{
            setDropdown(true);
        }
    }
    return(
        <nav className='navbar'>
        <Logo />
        <div onClick={handleClick}>
            <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nam-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to = '/services' className='nav-links' onClick={closeMobileMenu}>
                    Services <i className='fas fa-caret-down' />
                    {dropdown && <DropdownMenu />}
                </Link>
            </li>
            <li className='nav-item'>
                <Link to = '/contact-us' className='nav-links' onClick={closeMobileMenu}>
                    Contact Us
                </Link>
            </li>
        </ul>
        </nav>
    )
}

export default TopNavBar;
