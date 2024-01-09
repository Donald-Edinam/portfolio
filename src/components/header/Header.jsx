import React from 'react'
import Avatar from '../../assets/avatar.jpg'

const Header = () => {
  return (
    <>
    <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
            <img src={Avatar} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
        </div>
        <div className="col-lg-6">
            <h6>HI THERE, I'M:</h6>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">DONALD EDINAM</h1>
            <p className="lead">
            I specialize in the development and upkeep of contemporary websites and applications, providing solutions that seamlessly integrate with and solve your business challenges.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-dark btn-lg px-4 rounded-0">Let's Talk Business</button>
            </div>
        </div>
        </div>
  </div>
    </>
  )
}

export default Header