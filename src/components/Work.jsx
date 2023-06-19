import React from 'react';
import { works } from '../assets/works.js';
import pNav from '../assets/projectNav.js';
import { useEffect, useState } from 'react';
import Modal from './Modal.jsx';

function Work(props) {
    
    const [openModal, setOpenModal] = useState({open: false});
    const overlay = document.querySelector('#overlay');

    useEffect(() => {
        pNav(); // js file for work nav 
    }, []);
    // console.log(works.length)

    // const phPic = 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

    return (
        <section id='work'>
                    <nav>
                        <ul className="projects-nav">
                            <li className="pn-item proj-active"><span>All Projects</span></li>
                            <li className="pn-item"><span>Web/Mobile Development</span></li>
                            <li className="pn-item"><span>Python Programs</span></li>
                        </ul>
                    </nav>
                    <div className='projects container-fluid'>
                        {works.map((project, index)=>
                            <div key={index} className={`col-md-6 col-xl-4 col-sm-12 col-xs-12 ${project.codeType}`}>
                                <div className='project'  onClick={()=>{
                                    document.querySelector('#overlay').classList.add('active');
                                    setOpenModal({
                                        open: true,
                                        title: project.title,
                                        description: project.description,
                                        image: project.image,
                                        alt: project.alt,
                                        deploy: project.deploy,
                                        code: project.code,
                                        demo: project.site
                                    });
                                }}>
                                    <img src={project.image} alt={project.alt}/>
                                    <h3>{project.title}</h3>
                                </div>
                            </div>
                          
                        )}
                    </div>
                    {openModal.open && <Modal 
                        closeModal={setOpenModal} 
                        title={openModal.title} 
                        desc={openModal.description} 
                        img={openModal.image}
                        alt={openModal.alt}
                        deploy={openModal.deploy}
                        code={openModal.code}
                        demo={openModal.demo}
                    />}
        </section>
    );
}

export default Work;