import React from 'react';
// import Nav from './components/Nav';
import Home from './components/Home';
// import Work from './components/Work';
import Project from './components/Project';
// import About from './components/About';
import Contact from './components/Contact';
// import Social from './components/Social';
import { BrowserRouter } from 'react-router-dom';
import CursorTrail from './components/CursorTrail';

function App(props) {
    return (
        <BrowserRouter>
            {/* <Nav /> */}
            <Home />
            <Project />
            {/* <Work /> */}
            <Contact />
        </BrowserRouter>
    );
}

export default App;