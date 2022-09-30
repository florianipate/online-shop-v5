//import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../Logo/Logo,comonent';
//import MenuButton from '../MenuButton/MenuButton.component';

const TopNavBar = () =>{
    const [click, setClick] = useState(false);
    const handleClick =() => setClick(!click);
    return(
        <>
        <Logo />
        <div onClick={handleClick}>
            <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        </>
    )
}

export default TopNavBar;
