import React from 'react';
import Typed from 'typed.js';
import { useRef, useEffect, useLayoutEffect } from 'react';
import Topbutton from './Topbutton';
import gsap from 'gsap';

function Home(props) {

    const app = useRef();
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        // use scoped selectors
        gsap.fromTo(
          '.about-me',
          {opacity: 0, x: -350},
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
            <div className='opening1'>
              <div className='about-me'>
                <h1>Welcome<br />I'm a <br /><span ref={el} /></h1>
                <p>
                  I love bringing designs and ideas to life on the web. 
                  Whether it's a website, a webapp, blog, or a simple automatic emailer, 
                  I enjoy helping clients see their vision become reality.
                </p>
                <h2 className='social'>
                    <a href="https://www.google.com"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.youtube.com"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.w3schools.com"><i className="fa-solid fa-file"></i></a>
                </h2>
              </div>
                {/* <h1>Developer<br />Programmer</h1> */}
                {/* <h4>-Front End Obsessed</h4> */}
            </div>
            {/* <h2 className='social'><i className="fa-brands fa-linkedin"></i><i className="fa-brands fa-github"></i><i className="fa-solid fa-file"></i></h2> */}
            <div className='opening2'>
                <h4>-Full Stack Capable</h4>
                <h1>Andrew<br />Min</h1>
            </div>
            <Topbutton />
            <div id="overlay"></div>
        </section>
    );
}

export default Home;