import React from "react";

export default function Work() {

    let arr = [1, 2, 3, 4]

    return (
        <section>
            <div className="row mx-5 w-100 d-md-flex justiy-content-between align-items-center">
                <div className="col-md-8">
                    <h1>Featured Projects</h1>
                    <p className="lead-in">Award-winning websites for real-world clients</p>
                </div>
                <div className="col-md-4">
                    <a href="" className="btn btn-sm btn-secondary">All Projects</a>
                </div>
            </div>

            {/* <div className="row mx-auto text-center">
                <div className="col">Work will go here</div>
            </div> */}

            <div className="container">
                <div className="row d-md-flex h-100 justify-content-center align-items-center">
                    {arr.map((ar) => (
                        <div className="col-md-6 my-4 gy-3">
                            <div class="col">
                                <div class="card rounded-0">
                                    <svg class="bd-placeholder-img card-img-top rounded-0" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                                    <div class="card-body">
                                        <h5 class="card-title">Project title</h5>
                                        <a href="#" class="btn btn-sm btn-secondary rounded-0">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))

                    }

                    {/* <button className="btn btn-lg btn-dark w-25 m-3">View All Work</button> */}
                    {/* <a href="" className="text-center text-decoration-none text-light bg-secondary w-25">ALL PROJECTS</a> */}
                </div>
            </div>
        </section>
    )
}