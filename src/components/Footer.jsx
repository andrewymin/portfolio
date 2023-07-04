import React from 'react';

function Footer(props) {

    let year = new Date().getFullYear();

    return (
        <footer>
            <p>© copyright {year} Andrew Min</p>
        </footer>
    );
}

export default Footer;