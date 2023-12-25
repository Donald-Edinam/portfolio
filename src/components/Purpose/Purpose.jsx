import React from "react";
import "./purpose.css";

const Purpose = () => {
    const isWideScreen = window.screen.width > 996;

    return (
        <div>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-5">
                        <img
                            src="../../src/assets/1.png"
                            className={`d-block mx-lg-auto img-fluid ${isWideScreen ? "img-overlay" : ""}`}
                            alt="Bootstrap Themes"
                            width="100%"
                            height="105"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-7">
                        <h1 className="lh-1 mb-3 h2-overlay">My mission is to design real-world websites & dashboards around</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purpose;
