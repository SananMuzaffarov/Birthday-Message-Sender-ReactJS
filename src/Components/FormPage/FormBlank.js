import React from "react";

const FormBlank = () => {
    return(
        <div className="formBlank">
            <div className="col col1">
                <p>Write a wish for someone you care. Add <br /> their name and yours, create the wish and share it!</p>
            </div>
            <div className="col">
                <form>
                    <label>Who are you writing a wish for?</label>
                    <input type="text" placeholder="Name"/>
                    <br />
                    <label>From</label>
                    <input type="text" placeholder="Your name" />
                    <br />
                    <textarea placeholder="Your wish" />
                    <button type="submit">Create wish</button>
                </form>
            </div>
        </div>
    );
}
export default FormBlank;