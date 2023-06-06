import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

function Social(props) {

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

    return (
        <div className='social' ref={app}>
            <h2 className='platforms'>
                <a href="https://www.google.com"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.youtube.com"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.w3schools.com"><i className="fa-solid fa-file"></i></a>
            </h2>
        </div>
    );
}

export default Social;