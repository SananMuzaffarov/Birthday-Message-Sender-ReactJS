import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const FormBlank = () => {

    // UseRef Part
   const form = useRef()

   const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_v3ze9ha', 'template_fgmfgmo', form.current, 'Z3ARLYuvWTQ117QFq')
      .then((result) => {
          console.log(result.text);
      }, 
      (error) => {
          console.log(error.text);
      });   
      e.target.reset()
    };

    return(
        <div className="formBlank" id="formBlank">
            <div className="col col1">
                <h3>Write a wish for Sanan for his Birthday. Add <br /> your name and subject, create the wish and <br/> send it!</h3>
            </div>
            <div className="col col2">
                <form ref={form} onSubmit={handleSubmit}>
                    <label>From</label>
                    <input type="text" placeholder="Full name" required name="user_name"/>
                    <br />
                    <label>Subject</label>
                    <input type="text" placeholder="Your Subject" required name="subject"/>
                    <br />
                    <label>Email</label>
                    <input type="email" placeholder="Email" required name="user_email"/>
                    <br />
                    <textarea placeholder="Your wish" type="text" required name="user_wish"/>
                    <button type="submit">Send wish</button>
                </form>
            </div>
        </div>
    );
}
export default FormBlank;