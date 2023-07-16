import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Pdf from '../resource/CV_Resume_2023.pdf';


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
        fadeUp('.platforms > div:nth-child(1)', 100, 0, 2.5);
        fadeUp('.platforms > div:nth-child(2)', 50, 0, 2.9);
        fadeUp('.platforms > div:nth-child(3)', 50, 0, 3.3);
      }, app);
      
      return () => ctx.revert();
    }, []);

    return (
        <div className='social' ref={app}>
            <div className='platforms'>
                <div>
                    <a href="https://www.linkedin.com/in/andrewminproglife"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div>
                    <a href="https://github.com/andrewymin"><i className="fa-brands fa-github"></i></a>
                </div>
                <div>
                    <a href={Pdf} target='_blank'><i className="fa-solid fa-file"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Social;