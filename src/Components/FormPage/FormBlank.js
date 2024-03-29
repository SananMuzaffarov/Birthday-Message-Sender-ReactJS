import React, { useRef, useState } from "react";
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

    const [values, setValues] = useState({
        user_name: '',
        subject: '',
        user_email: '',
        user_wish: ''
    });

    const handleChangeUserName = (e) => {
        setValues({...values, user_name: e.target.value })
    }
    const handleChangeSubject = (e) => {
        setValues({...values, subject: e.target.value })
    }
    const handleChangeUserMail = (e) => {
        setValues({...values, user_email: e.target.value })
    }
    const handleChangeUserWish = (e) => {
        setValues({...values, user_wish: e.target.value })
    }

    return(
        <div className="formBlank" id="formBlank">
            <div className="col col1">
                <h3>Write a wish for Sanan for his Birthday. Add <br /> your name and subject, create the wish and <br/> send it!</h3>
            </div>
            <div className="col col2">
                <form ref={form} onSubmit={handleSubmit}>
                    <label>From</label>
                    <input type="text" 
                    placeholder="Full name" 
                    required
                    name="user_name" 
                    value={values.user_name} 
                    onChange={handleChangeUserName}
                    />
                    <br />

                    <label>Subject</label>
                    <input type="text" 
                    placeholder="Your Subject" 
                    required 
                    name="subject" 
                    value={values.subject}
                    onChange={handleChangeSubject}
                    />
                    <br />

                    <label>Email</label>
                    <input type="email" 
                    placeholder="Email" 
                    required 
                    name="user_email" 
                    value={values.user_email}
                    onChange={handleChangeUserMail}
                    />
                    <br />

                    <textarea 
                    placeholder="Your wish" 
                    type="text" 
                    required 
                    name="user_wish" 
                    value={values.user_wish} 
                    onChange={handleChangeUserWish}/>

                    <button type="submit">Send wish</button>
                </form>
            </div>
        </div>
    );
}
export default FormBlank;