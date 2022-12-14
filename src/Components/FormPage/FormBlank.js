import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const FormBlank = () => {

   const form = useRef()

   const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_v3ze9ha', 'template_fgmfgmo', form.current, 'Z3ARLYuvWTQ117QFq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
    };

    return(
        <div className="formBlank">
            <div className="col col1">
                <h3>Write a wish for someone you care. Add <br /> their name and yours, create the wish and <br/> share it!</h3>
            </div>
            <div className="col col2">
                <form ref={form} onSubmit={handleSubmit}>
                    <label>From</label>
                    <input type="text" placeholder="Your name" required name="user_name"/>
                    <br />
                    <label>Subject</label>
                    <input type="text" placeholder="Your Subject" required name="subject"/>
                    <br />
                    <label>Who are you writing a wish for?</label>
                    <input type="email" placeholder="Email" required name="user_email"/>
                    <br />
                    <textarea placeholder="Your wish" type="text" required/>
                    <button type="submit">Create wish</button>
                </form>
            </div>
        </div>
    );
}
export default FormBlank;