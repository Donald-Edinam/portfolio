import React from 'react'
import './card.css'

const EstimateCard = () => {
  return (
    // <div>
    //   <div class="card">
    //           <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    //           <div class="card-body">
    //             <h5 class="card-title">Heading Title</h5>
    //             <p class="card-text">
    //                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur harum culpa 
    //                 voluptas libero commodi tempora quod quibusdam praesentium suscipit quas.
    //             </p>
    //             <a href="#" class="btn btn-primary">Go somewhere</a>
    //           </div>
    //         </div>
    // </div>

    <div className="col-md-6 w-50">
      <div className="card-one">
        <h1>&times;</h1>
        <h3>Another Text</h3>
      </div>
      <div className="card-two">
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Distinctio maiores ea eaque, debitis sed asperiores!
        </h3>
        <p className="lead">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum est architecto, facere consequuntur repudiandae,
           rem consectetur magni eos ratione praesentium quisquam amet sunt adipisci ipsum nostrum tempora excepturi quos quod!
        </p>
      </div>
    </div>
  )
}

export default EstimateCard
