import React from 'react';
import { HashLink } from 'react-router-hash-link';


function Nav(props) {
    return (
        <nav id="mainNav">
            {/* <HashLink smooth to='#'>Home</HashLink> */}
            <HashLink smooth to='#work'>Work</HashLink>
            {/* <HashLink smooth to='#about'>About</HashLink> */}
            <HashLink smooth to='#contact'>Contact</HashLink>
            {/* <HashLink smooth to='#social'>Github</HashLink> */}
        </nav>
    );
}

export default Nav;