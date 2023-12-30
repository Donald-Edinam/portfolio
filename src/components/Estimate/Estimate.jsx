import React from 'react'
import EstimateCard from './EstimateCard'
import './estimate.css'

const Estimate = () => {
  return (
      <div>
          <div className="bg-secondary text-dark px-4 py-5 text-center">
              <div className="py-5">
                  <h1 className="display-5 fw-bold text-white">Check this Out!</h1>
                  <div className="col-lg-6 mx-auto">
                      <h3 className="fs-5 mb-4">
                          There are an estimated 20 million eCommerce websites across the entire globe,
                          with more and more being created every single day. Did you know that 99% of them
                          won't make any profit? We've helped many to be in the other 1%.
                      </h3>
                      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                          <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Let's Talk</button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <EstimateCard />
            </div>
            <div className="col-md-6">
                <EstimateCard />
            </div>
          </div>
      </div>
  )
}

export default Estimate
