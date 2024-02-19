import React from "react";
import Pic1 from '../../assets/avatar.jpg'

const AboutMe = () => {
    return (
        <div>
            <div className="container col-xxl-8 px-4 py-5 text-light">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={Pic1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" width="700" height="500"/>
                    </div>
                    <div className="col-lg-6">
                        <h6>ABOUT ME</h6>
                        <h1 className="display-6 fw-bold lh-1 mb-3 text-light font-fm">Donald Edinam</h1>
                        {/* <h6 className="lead-in"><code>Frontend </code> Developer</h6> */}
                        <div className="d-block">
                        <p className="lead">
                        I am a frontend developer specializing in creating visually stunning web experiences using React.js and JavaScript. My expertise lies in crafting seamless and interactive designs that capture users' attention from the initial click. I make it a priority to stay at the forefront of web development trends and employ cutting-edge frameworks to enhance performance.                        </p>
                        <p className="lead">
                        Collaboration is fundamental to my work philosophy, whether harmonizing with designers or integrating frontend technologies with backend systems. Beyond mastering HTML, CSS, and JavaScript, my commitment to staying informed about evolving tech stacks ensures projects benefit from the latest advancements.                        </p>
                        <p className="lead">
                        Join me on a journey where modern stacks meet creativity, shaping the digital future with innovation, functionality, and artistic flair, one code line at a time.                        </p>
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