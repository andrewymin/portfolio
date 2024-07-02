import React, { useState, useRef, useLayoutEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";

function Contact(props) {
  const contact_img =
    "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
  const app = useRef();
  // const tl = useRef(); // timeline
  // const test_var = import.meta.env.VITE_test;

  const env_test =
    import.meta.env.VITE_SECRET_KEY || process.env.VITE_SECRET_KEY;

  const form = useRef();
  const notifySuccess = () =>
    toast.success("🎉 Message successfully sent!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifyError = () =>
    toast.error("Message not Sent 😥", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifyProgress = () =>
    toast("⏳ Sending in Progress...", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function checkName(e) {
    let userName = e.target.value.trim();
    if (userName == "") {
      e.target.value = null;
      setName("");
    }
  }

  function handleChange(e) {
    e.target.name == "name"
      ? setName(e.target.value)
      : e.target.name == "email"
      ? setEmail(e.target.value)
      : setMsg(e.target.value);
    // e.target.name === 'name' ? setName(e.target.value) : null;
    // console.log(name)
  }

  function handleSubmit(e) {
    let userInfo = {
      userName: name,
      userEmail: email,
      userMsg: msg,
    };

    notifyProgress();
    // notifySuccess();
    // notifyError();
    // console.log(userInfo)

    document.querySelector("#contact button").disabled = true;
    fetch("https://bady1hwq56.execute-api.us-west-2.amazonaws.com/dev", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }).then((res) => {
      // this is just checking if the promise is fulfilled
      if (!res.ok) {
        notifyError();
        console.log(res.error);
        document.querySelector("#contact button").disabled = false;
        return;
      }
      notifySuccess();
      setName("");
      setEmail("");
      setMsg("");
      document.querySelector("#contact button").disabled = false;
    });

    e.preventDefault();
  }

  const growRight = (target, delay) => {
    return gsap.fromTo(
      target,
      { scale: 0, transformOrigin: "left top" }, // from
      {
        duration: 3,
        delay: `.${delay}`,
        scale: 1,
        ease: `elastic.out(1, 0.3)`,
        scrollTrigger: {
          // to
          trigger: "#emailForm",
          start: "top 60%",
          // markers: true,
        },
      }
    );
  };

  useLayoutEffect(() => {
    const text = document.querySelector(".text p");
    let inputs = document.querySelector("form").childNodes;

    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
      )
      .join("");

    let ctx = gsap.context(() => {
      gsap.fromTo(
        // contact img
        ".about_me img",
        { x: -1000 }, // from
        {
          duration: 2,
          ease: "power3.out",
          x: 0,
          scrollTrigger: {
            // to
            trigger: ".about_me img",
            start: "top 60%",
            // markers: true,
          },
        }
      );
      gsap.fromTo(
        // contact circle
        ".circle",
        { scale: 0 }, // from
        {
          delay: 1.1,
          duration: 2.5,
          ease: "elastic.out(1, 0.3)",
          scale: 1,
          scrollTrigger: {
            // to
            trigger: ".about_me img",
            start: "top 60%",
            // markers: true,
          },
        }
      );
      gsap.fromTo(
        // contact email h4
        "#emailForm h4",
        { x: 1000 }, // from
        {
          duration: 1.4,
          x: 0,
          ease: "power3.out",
          scrollTrigger: {
            // to
            trigger: "#emailForm h4",
            start: "top 60%",
            // markers: true,
          },
        }
      );
      // inputs.map((field, index)=>{
      //     console.log(`field: ${field}, key: ${index}`)
      // });
      inputs.forEach((field, index) => growRight(field, index));
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={app} id="contact">
      <div className="about_me">
        <img src={contact_img} alt="desk with computer" />
        <div className="rotate_pic">
          <div className="circle">
            <div className="logo">👨‍💻</div>
            <div className="text">
              <p>Full-Stack Web Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div id="emailForm">
        <h4>Write me a Message 👇</h4>
        <form ref={form} onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            value={name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Name"
            required
            pattern="[a-zA-Z\s]+"
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter field correctly")
            }
            onInput={(e) => e.target.setCustomValidity("")}
            onBlur={checkName}
          />

          <label htmlFor="email">Your Email</label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
          />

          <label htmlFor="msg">Message</label>
          {/* <input name='msg' type="text" placeholder='Message'/> */}

          <textarea
            onChange={handleChange}
            name="msg"
            id="msg"
            cols="30"
            rows="5"
            placeholder="Enter text here..."
            required
            value={msg}
          ></textarea>

          <button type="submit">SEND</button>
        </form>
        <ToastContainer pauseOnHover={false} />
      </div>
    </section>
  );
}

export default Contact;
