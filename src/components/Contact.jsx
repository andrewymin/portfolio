import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Coffee from './Coffee.jsx';

function Contact(props) {

    // const test_var = import.meta.env.VITE_test;
    const service_id = import.meta.env.VITE_service_id;
    const temp_id = import.meta.env.VITE_template_id;
    const public_key = import.meta.env.VITE_public_key;
    const form = useRef();
    const notify = () => toast.success('🎉 Message successfully sent!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    function checkName(e) {
        let userName = e.target.value.trim();
        if (userName == "") {
            e.target.value = null;
            setName('');
        }
    }

    function handleChange(e){
        e.target.name == "name" ? setName(e.target.value) 
            : e.target.name == "email" ? setEmail(e.target.value)
            : setMsg(e.target.value);
        // e.target.name === 'name' ? setName(e.target.value) : null;
        // console.log(name)

    }

    function handleSubmit(e) {
        setName('');
        setEmail('');
        setMsg('');
        notify();

        // TODO: undo comment below after done testing
        // emailjs.sendForm(service_id, temp_id, form.current, public_key)
        //     .then((result) => {
        //         setName('');
        //         setEmail('');
        //         setMsg('');
        //         notify(); // toast notifier
        //         // console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });


        // console.log(test_var) // this is the test for env variables, 
        // TODO: get the secret keys from env file for emailjs api 
        e.preventDefault();
      }

    return (
        <section id='contact'>
            <div id='emailForm'>
                <h4>Write me a Message 👇</h4>
                <form ref={form} onSubmit={handleSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input 
                        value={name} 
                        onChange={handleChange} 
                        name='name' 
                        type="text" 
                        placeholder='Name' 
                        required
                        pattern='[a-zA-Z\s]+'
                        onInvalid={e => e.target.setCustomValidity('Please enter field correctly')}
                        onInput={e => e.target.setCustomValidity('')}
                        onBlur={checkName}
                        />
                    <label htmlFor="email">Your Email</label>
                    <input onChange={handleChange} name='email' type="email" placeholder='Email' required value={email}/> 
                    <label htmlFor="msg">Message</label>
                    {/* <input name='msg' type="text" placeholder='Message'/> */}
                    <textarea onChange={handleChange} name="msg" id="msg" cols="30" rows="5" placeholder='Enter text here...' required value={msg}></textarea>
                    <button type='submit'>SEND</button>
                </form>
                <ToastContainer
                    pauseOnHover={false}
                />
            </div>
            {/* <Coffee /> */}
        </section>
    );
}

export default Contact;