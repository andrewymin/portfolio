import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

function Social(props) {

    const fadeUp = (target, yStart, yEnd, startDelay) => {
        return gsap.fromTo(
            target,
            {opacity: 0, y: yStart},
            {duration: 2.5, opacity: 1, y: yEnd, delay: startDelay, ease: "elastic.out(1, 0.5)"},
          );
    }

    const app = useRef();
    // const tl = useRef();

    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        // use scoped selectors
        fadeUp('.platforms a:nth-child(1)', 100, 0, 3.3);
        fadeUp('.platforms a:nth-child(2)', 100, 0, 2.5);
        fadeUp('.platforms a:nth-child(3)', 100, 0, 3.3);
      }, app);
      
      return () => ctx.revert();
    }, []);

    return (
        <div className='social' ref={app}>
            <div className='platforms'>
                <a href="https://www.google.com"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.youtube.com"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.w3schools.com"><i className="fa-solid fa-file"></i></a>
            </div>
        </div>
    );
}

export default Social;