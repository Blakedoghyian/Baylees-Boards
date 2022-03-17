import React from "react";

function SignUp() {
    return (
    <div class="container py-4">
    <section class="row">
        <article class="col-md-6">
            <h2>
                Sign Up
            </h2>
            <form class="signup-form shadow-lg rounded">
                <div class="px-1">
                    <label for="exampleSignupUsername1" class="form-label">Username</label>
                    <input type="username" class="form-control" id="exampleSignupUsername1"/>
                </div>
                <div class="px-1">
                    <label for="exampleSignupEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleSignupEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="px-1">
                    <label for="exampleSignupPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleSignupPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary m-3">Submit</button>
            </form>
        </article>
    </section>
</div>
    );
}

export default SignUp;