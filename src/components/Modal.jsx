import React from "react";

function Modal(props) {
  return (
    <div className="modalContainer">
      <img src={props.img} alt={props.alt} />
      <div className="project-info">
        <button
          onClick={() => {
            props.closeModal({ open: false });
            overlay.classList.remove("active");
          }}
        >
          {" "}
          X{" "}
        </button>
        <h6>PROJECT</h6>
        <h3>{props.title}</h3>
        {/* <ul> 
                {for (let i=0; i < props.lang.length; i++){
                    <li> {props.lang[i]} </li>
                }}
                    </ul>*/}
        <h6>ABOUT</h6>
        <div className="project-about">
          <p>{props.desc}</p>
        </div>
        <div className="project-btns">
          {props.deploy && (
            <a
              href={props.demo}
              target="_blank"
              rel="noopener"
              className="siteBtn"
            >
              Site
            </a>
          )}
          <a
            href={props.code}
            target="_blank"
            rel="noopener"
            className="siteBtn"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
