import React from "react";
import { HashLink } from "react-router-hash-link";

function Topbutton(props) {
  // const page = document.querySelector('#root');
  // const topBtn = document.querySelector('#topBtn');

  window.addEventListener("scroll", () => {
    scrollFunction();
    // console.log(window.scrollY)
  });

  function scrollFunction() {
    if (window.scrollY > 150) {
      //   $("#topButton").css('display', 'block');
      // document.querySelector('#topBtn').style.display = 'block';
      document.querySelector("#topBtn").classList.replace("hide", "show");
    } else {
      //   $("#topButton").css('display', 'none');
      // document.querySelector('#topBtn').style.display = 'none';
      document.querySelector("#topBtn").classList.replace("show", "hide");
    }
  }

  return (
    <>
      <HashLink id="topBtn" className="hide" smooth to="#">
        <i className="fa-solid fa-arrow-up"></i>
      </HashLink>
    </>
  );
}

export default Topbutton;
