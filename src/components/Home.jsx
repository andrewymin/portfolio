import React from 'react';
import Typed from 'typed.js';
import { useRef, useEffect, useLayoutEffect } from 'react';
import Nav from './Nav';
import Topbutton from './Topbutton';
import Social from './Social';
import gsap from 'gsap';

function Home(props) {

    const app = useRef();
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        // use scoped selectors
        gsap.fromTo(
          '.about-me',
          {opacity: 0, x: -100},
          {duration: 1, opacity: 1, x: 0},
        )
        gsap.fromTo(
          '.title',
          {opacity: 0, x: 100},
          {duration: 1, opacity: 1, x: 0},
        )
      }, app);
      
      return () => ctx.revert();
    }, []);

    var options = {
        strings: [
          "Developer",
          "Programmer", 
          // "Thinker",
          "Freelancer",
          // "Gamer", 
          // "Explorer",
          // "Puzzler",
          // "Creator",
        ],
        typeSpeed: 140,
        backSpeed: 150,
        loop: true
      };

    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, options);
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

    return (
        <section ref={app} id='intro'>
            <div className='about-me'>
              <h1>Welcome<br />I'm a <br /><span ref={el} /></h1>
              <p>
                I love bringing designs and ideas to life on the web. 
                Whether it's a website, a webapp, blog, or a simple automatic emailer, 
                I enjoy helping clients see their vision become reality.
              </p>
            </div>
            <Nav />
            <Social/>
            <div className='title'>
              <div className="name">
                <h4>-Full Stack Capable</h4>
                <h1>Andrew<br />Min</h1>
              </div>
            </div>
            <Topbutton />
            <div id="overlay"></div>
        </section>
    );
}

export default Home;