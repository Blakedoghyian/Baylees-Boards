import React from "react";

function SignIn() {
    return (
        <div class="container py-4">
        <section class="row">
        <article class="col-md-6">
            <h2>
                Sign In
            </h2>
            <form class="login-form shadow-lg rounded">
                <div class="px-1">
                    <label for="exampleLoginUsername1" class="form-label">Username</label>
                    <input type="username" class="form-control" id="exampleLoginUsername1"/>
                </div>
                <div class="px-1">
                    <label for="exampleLoginEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleLoginEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="px-1">
                    <label for="exampleLoginPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleLoginPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary m-3">Submit</button>
            </form>
        </article>
    </section>
</div>
    );
}

export default SignIn;