import React from 'react';

function About(props) {
    return (
        <section id='about'>
            <div className='skill-logos'>
                <div className='logo'>🎈</div>
                <div className='logo'>🎈</div>
                <div className='logo'>🎈</div>
                <div className='logo'>🎈</div>
                <div className='logo'>🎈</div>
                <div className='logo'>🎈</div>
                <div className='logo'>🎈</div>
            </div>
            <div className='about-me'>
                <h4>About me:</h4>
                <p>
                    I love bringing designs and ideas to life on the web. 
                    Whether it's a website, a webapp, blog, or a simple automatic emailer, 
                    I enjoy helping clients see their vision become reality.
                </p>
            </div>
        </section>
    );
}

export default About;