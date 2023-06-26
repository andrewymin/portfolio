import {React, useEffect} from 'react';
import gsap from 'gsap';
import { projects } from '../assets/projects.js';
// import pNav from '../assets/projectNav.js';

function Project(props) {

    // useEffect(() => {
    //     pNav(); // js file for work nav 
    // }, []);

    return (
        <section id="work">
            <h1>Recent Projects</h1>
                <nav>
                    <ul className="projects-nav">
                        <li className="pn-item proj-active"><i className="fa fa-light fa-laptop-code"></i></li>
                        <li className="pn-item"><i className="fa-brands fa-python"></i></li>
                    </ul>
                </nav>
            <div className="projects container-fluid">
                {projects.map((project, index)=>
                    <div className='project'>
                        
                        {project.left ? 
                            <div>
                                <img src={project.image} alt={project.alt}/>
                                <div>
                                    <h6>PROJECT</h6>
                                    <h3>{project.title}</h3>
                                    {/* <ul> 
                                    {for (let i=0; i < project.lang.length; i++){
                                        <li> {project.lang[i]} </li>
                                    }}
                                        </ul>*/}
                                    <h6>ABOUT</h6>
                                    <div className='project-about'>
                                        <p>
                                            {project.desc}
                                        </p>
                                    </div>
                                    <div className='project-btns'>
                                        {project.deploy && <a href={project.demo} target="_blank" rel="noopener" className='siteBtn'>Site</a>}
                                        <a href={project.code} target="_blank" rel="noopener" className='siteBtn'>Code</a>
                                    </div>
                                </div>
                            </div> 
                            : 
                            <div>
                                <div>
                                    <h6>PROJECT</h6>
                                    <h3>{project.title}</h3>
                                    {/* <ul> 
                                    {for (let i=0; i < project.lang.length; i++){
                                        <li> {project.lang[i]} </li>
                                    }}
                                        </ul>*/}
                                    <h6>ABOUT</h6>
                                    <div className='project-about'>
                                        <p>
                                            {project.desc}
                                        </p>
                                    </div>
                                    <div className='project-btns'>
                                        {project.deploy && <a href={project.demo} target="_blank" rel="noopener" className='siteBtn'>Site</a>}
                                        <a href={project.code} target="_blank" rel="noopener" className='siteBtn'>Code</a>
                                    </div>
                                </div>
                                <img src={project.image} alt={project.alt}/>
                        </div> 
                        }

                    </div>
                )}
            </div>
        </section>
    );
}

export default Project;