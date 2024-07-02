import React from "react";
import { useRef, useLayoutEffect } from "react";
import { HashLink } from "react-router-hash-link";
import gsap from "gsap";

function Nav(props) {
  const app = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.fromTo(
        ".link1",
        { opacity: 0, x: -100 },
        { duration: 1, opacity: 1, x: 0, delay: 2.5 }
      );
      gsap.fromTo(
        ".link2",
        { opacity: 0, x: 100 },
        { duration: 1.75, opacity: 1, x: 0, delay: 3.3 }
      );
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div id="mainNav" ref={app}>
      <nav className="menu">
        <div className="link1">
          <div className="arrow"></div>
          <HashLink smooth to="#work">
            <span>Projects</span>
          </HashLink>
        </div>
        <div className="link2">
          <HashLink smooth to="#contact">
            <span>Contact</span>
          </HashLink>
          <div className="arrow"></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
