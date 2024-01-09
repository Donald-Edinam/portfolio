import React from 'react'
import "./workflow.css"
import  Amico from "../../../src/assets/amico.svg"


const WorkFlow = () => {
  return (

    <div class="container px-4 py-5" id="hanging-icons">
    <h2 class="pb-2 border-bottom">My Services</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Web Development</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"><use xlink:href="#cpu-fill"></use></svg>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Web Design</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"><use xlink:href="#tools"></use></svg>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Graphic Design</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
    </div>
  </div>

    // <div>
    //  <div className="row mb-3 text-center">
    //   <div className="col-md-8 themed-grid-col">
    //     <div className="pb-3">
    //       <ul>
    //         <li>1. WordPress Developement</li>
    //         <li>2. Online Store Design</li>
    //         <li>3. Online Booking System</li>
    //         <li>4. Landing Pages</li>
    //         <li>5. 3D Websites</li>
    //         <li>6. Saas Pages</li>
    //       </ul>
    //     </div>
    //     <div className="row">
    //       <div className="col-md-6 themed-grid-col">
    //         <h1>
    //             I use the latest technology stacks
    //         </h1>
    //       </div>
    //       <div className="col-md-6 themed-grid-col">
    //         <img src={Amico} alt="" className="img-fluid" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="col-md-4 themed-grid-col">
    //     <p className="lead small-txt">
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    //         Laudantium ex quis debitis temporibus pariatur. 
    //         Perspiciatis, excepturi eligendi? Voluptatum, quos assumenda?
    //     </p>
    //   </div>
    // <div></div></div>
    // </div>
  )
}

export default WorkFlow
