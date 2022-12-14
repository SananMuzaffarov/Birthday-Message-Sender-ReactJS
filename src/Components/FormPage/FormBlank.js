import React from "react";

const FormBlank = () => {
    return(
        <div className="formBlank">
            <div className="col col1">
                <h3>Write a wish for someone you care. Add <br /> their name and yours, create the wish and <br/> share it!</h3>
            </div>
            <div className="col col2">
                <form>
                    <label>Who are you writing a wish for?</label>
                    <input type="text" placeholder="Name"/>
                    <br />
                    <label>From</label>
                    <input type="text" placeholder="Your name"/>
                    <br />
                    <textarea placeholder="Your wish" type="text"/>
                    <button type="submit">Create wish</button>
                </form>
            </div>
        </div>
    );
}
export default FormBlank;