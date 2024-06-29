import { React, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../assets/projects.js";
// import pNav from '../assets/projectNav.js';

gsap.registerPlugin(ScrollTrigger);

function Project(props) {
  const app = useRef();
  // var projects = gsap.utils.toArray(".project"); // created arrary to loop through projects

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const projects = document.querySelectorAll(".project");
      // use scoped selectors
      gsap.fromTo(
        ".w_intro",
        { opacity: 0 }, // from
        {
          duration: 1,
          opacity: 1,
          scrollTrigger: {
            // to
            trigger: ".w_intro",
            start: "top 80%",
            // markers: true,
          },
        }
      );

      projects.forEach((project) => {
        // loop through each project
        gsap.fromTo(
          project,
          { opacity: 0, y: 100 }, // from
          {
            duration: 1,
            opacity: 1,
            y: 0,
            scrollTrigger: {
              // to
              trigger: project,
              start: "top 65%",
              // markers: true,
            },
          }
        );
      });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={app} id="work">
      <div className="w_intro">
        <h6>RECENT PROJECTS</h6>
        <h4>
          Each Project is a <span>unique</span> piece of development
        </h4>
      </div>
      <div className="projects">
        {projects.map(
          (
            project,
            index // maping through projects
          ) => (
            <div className="project" key={index}>
              {project.left ? (
                <>
                  <img src={project.image} alt={project.alt} />
                  <div className="proj_info">
                    <h2>{project.title.toLocaleUpperCase()}</h2>
                    <div className="project-about">
                      <p>{project.description}</p>
                    </div>
                    <ul className="lang">
                      {project.langs.map((lang, index) => {
                        return <li key={index}>{lang}</li>;
                      })}
                    </ul>
                    <div className="project-btns">
                      {project.deploy && (
                        <a
                          href={project.site}
                          target="_blank"
                          rel="noopener"
                          className="siteBtn"
                        >
                          Live Demo{" "}
                          <i className="fa fa-arrow-up-right-from-square fa-xl"></i>
                        </a>
                      )}
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener"
                        className="siteBtn"
                      >
                        Code <i className="fa-brands fa-github fa-xl"></i>
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                // clause change for layout of project if left = false
                <>
                  <div className="proj_info">
                    <h2>{project.title.toLocaleUpperCase()}</h2>
                    <ul className="lang" style={{ margin: "0" }}>
                      {project.langs.map((lang, index) => {
                        return <li key={index}>{lang}</li>;
                      })}
                    </ul>
                    <div className="project-about">
                      <p>{project.description}</p>
                    </div>
                    <div className="project-btns">
                      {project.deploy && (
                        <a
                          href={project.site}
                          target="_blank"
                          rel="noopener"
                          className="siteBtn"
                        >
                          Live Demo{" "}
                          <i className="fa fa-arrow-up-right-from-square fa-xl"></i>
                        </a>
                      )}
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener"
                        className="siteBtn"
                      >
                        Code <i className="fa-brands fa-github fa-xl"></i>
                      </a>
                    </div>
                  </div>
                  <img src={project.image} alt={project.alt} />
                </>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Project;
