import React, { useRef } from 'react';
import "./Joinus.css";
import emailjs from '@emailjs/browser'

const Joinus = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_n69vkia', 'template_8299ce8', form.current, 'DFxBx8pUu1oCY3rBZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO    </span>
          <span>LEVEL UP </span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email"  placeholder="Enter your email here"/>
        <button className="btn btn-j" >Join now</button>
        </form>

      </div>
    </div>
  );
};


export default Joinus;
