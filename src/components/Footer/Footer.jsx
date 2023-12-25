import React from "react";

export default function Footer() {
    return (
       <div className="container-xxl bg-dark text-light">
         <div className="container">
            <footer className="row py-5 my-5 border-top">
                <div className="col-md-8">
                    <h1>You only one chane chance to make a first impression.</h1>
                    <h4>Let make it an amazing one</h4>
                </div>
                <div className="col-md-4">
                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row w-100">
                    <div className="co-md-8 w-75">
                        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                            <p>© 2023 Donald Edinam. All rights reserved.</p>
                            <ul class="list-unstyled d-flex">
                                <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink: href="#twitter"></use></svg></a></li>
                                <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink: href="#instagram"></use></svg></a></li>
                                <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink: href="#facebook"></use></svg></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 w-25">
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink: href="#twitter"></use></svg>1</a></li>
                            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink: href="#instagram"></use></svg>2</a></li>
                            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink: href="#facebook"></use></svg>3</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
       </div>
    )
} 