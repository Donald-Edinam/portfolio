import React from "react";

export default function NewsLetter() {
    return (
        <section className="container h-100">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Your name</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Your Mail</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">What Services Are You Interested In</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Budget Range</label>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Please tell a bit about Yourself & your Project</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div class="mb-3">
                        <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                            <option selected="">How would you like Us to connect</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <button className="btn btn-lg btn-dark">SEND CONTACT REQUEST NOW</button>
                </div>
            </div>
        </section>
    )
}