import React from "react";

function Testimonial() {
    return (
        <section className="bg-test">
            <div class="bg-auto text-secondary px-4 py-5 text-center">
                <div class="py-5">
                    {/* <h1 class="display-5 fw-bold text-white">Dark color hero</h1> */}
                    <div class="col-lg-6 mx-auto">
                        <div class="card">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                            <cite>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                            </cite>
                                        </p>
                                        <p class="card-text"><small class="text-body-secondary">Traversy Media</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Testimonial