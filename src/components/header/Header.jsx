import React from 'react'
import Avatar from '../../assets/avatar.jpg'
import { Button } from '../ind_components/Button'
import { MainBtn } from '../ind_components/MainBtn'

import "../fonts/acorn.woff" 

const Header = () => {
  return (
    <>

      <div class="px-4 py-5 my-5 text-center ht-100">
        {/* <img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
        <h1 class="display-6 text-light pad-top font-fm">Hi, I'm Donald Edinam</h1>
        <h1 class="display-5 text-light fw-bold font-fm">A Frontend Developer </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4 text-light">
          I'm passionate about crafting experiences that are engaging, accessible, and user-centric.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary px-4 gap-3">Let's Talk Buusiness</button>
          </div>
        </div>
      </div>

      {/* <div className="container col-xxl-8 px-4 py-5">
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
  </div> */}
    </>
  )
}

export default Header