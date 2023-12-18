import React from "react";

const AboutMe = () => {
    return (
        <div>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" width="700" height="500"/>
                    </div>
                    <div className="col-lg-6">
                        <h6>ABOUT ME</h6>
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Donald Edinam</h1>
                        <h6 className="lead-in"><code>Frontend </code> Developer</h6>
                        <div className="d-block">
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn rounded-0 btn-dark btn-lg px-4 me-md-2">Let's Talk</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe