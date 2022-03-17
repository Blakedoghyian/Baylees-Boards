import React from "react";

function Contact() {
    return (
        <div class="container py-4">
        <section class="row">
            <article class="col-md-6">
                <h2>
                    Leave a message
                </h2>
                <form class="signup-form shadow-lg rounded">
                    <div class="px-1">
                        <label for="exampleName" class="form-label">Name</label>
                        <input type="name" class="form-control" id="exampleName"/>
                    </div>
                    <div class="px-1">
                        <label for="exampleSignupEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleSignupEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="px-1">
                        <label for="exampleMessage" class="form-label">Message</label>
                        <textarea name="message" class="form-control" id="exampleMessage"/>
                    </div>
                    <button type="submit" class="btn btn-primary m-3">Submit</button>
                </form>
            </article>
        </section>
    </div>
    );
}

export default Contact;
