import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark" aria-label="Offcanvas navbar large">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">DONALD<span className='fw-b'>.EDINAM</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-light" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>
          <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Latest Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blogs</a>
            </li>
          </ul>
          <form className="d-flex mt-3 mt-lg-0">
            <button className="btn btn" type="submit">Contact Me</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar
