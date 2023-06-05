import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
// import Social from './components/Social';
import { BrowserRouter } from 'react-router-dom';
import CursorTrail from './components/CursorTrail';

function App(props) {
    return (
        <BrowserRouter>
            <Nav />
            <Home />
            <Work />
            <Contact />
        </BrowserRouter>
    );
}

export default App;