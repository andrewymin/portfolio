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
            <div className="w_intro">
                <h6>RECENT PROJECTS</h6>
                <h4>Each Project is a <span>unique</span> piece of development</h4>
            </div>
            <div className="projects">
                {projects.map((project, index)=> // maping through projects
                    <div className='project'>
                        {project.left ? 
                            <>
                                <img src={project.image} alt={project.alt}/>
                                <div className='proj_info'>
                                    <h3>{project.title}</h3>
                                    <div className='project-about'>
                                        <p>
                                            {project.description}
                                        </p>
                                    </div>
                                    {/* <ul> 
                                    {for (let i=0; i < project.lang.length; i++){
                                        <li> {project.lang[i]} </li>
                                    }}
                                    </ul>*/}
                                    <div className='project-btns'>
                                        {project.deploy && <a href={project.site} target="_blank" rel="noopener" className='siteBtn'>Live Demo <i className="fa fa-arrow-up-right-from-square fa-xl"></i></a>}
                                        <a href={project.code} target="_blank" rel="noopener" className='siteBtn'>Code <i className="fa-brands fa-github fa-xl"></i></a>
                                    </div>
                                </div>
                            </> 
                            : // clause change for layout of project if left = false
                            <>
                                <div className='proj_info'>
                                    <h3>{project.title}</h3>
                                    {/* <ul> 
                                    {for (let i=0; i < project.lang.length; i++){
                                        <li> {project.lang[i]} </li>
                                    }}
                                        </ul>*/}
                                    <div className='project-about'>
                                        <p>
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className='project-btns'>
                                        {project.deploy && <a href={project.site} target="_blank" rel="noopener" className='siteBtn'>Live Demo <i className="fa fa-arrow-up-right-from-square fa-xl"></i></a>}
                                        <a href={project.code} target="_blank" rel="noopener" className='siteBtn'>Code <i className="fa-brands fa-github fa-xl"></i></a>
                                    </div>
                                </div>
                                <img src={project.image} alt={project.alt}/>
                        </> 
                        }
                    </div>
                )}
            </div>
        </section>
    );
}

export default Project;