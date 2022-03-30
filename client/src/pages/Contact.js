import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();

    const [done, setDone] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            'service_gzst5yf', 
            'template_lyq6kmb', 
            formRef.current, 
            'UGdkkVMY1eazYTflB'
        )
        .then((result) => {
            console.log(result.text);
            setDone(true);
            handleReset();
        }, (error) => {
            console.log(error.text);
        });
    }
    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
          );
        this.setState({
          itemvalues: [{}]
        });
      };

    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Contact Me</h1>
                    <div className="contact-info">
                        <p className="contact-description">
                            <b>Looking for something custom?</b> Please reach out by using the form below. I will get back to you as soon as I can!
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="your name" name="user_name" />
                            <input type="text" placeholder="subject" name="user_subject" />
                            <input type="text" placeholder="your email address" name="user_email" />
                            <textarea rows="5" placeholder="message" name="message"></textarea>
                            <button class="contact-button">submit</button>
                            {done && " -- Thank you for your message, we will reach out asap! --"}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;