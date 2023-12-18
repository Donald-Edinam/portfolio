import React from 'react'
import "./feedSection.css"
import logo1 from '../../assets/logo-01.png'
import logo2 from '../../assets/logo-02.png'
import logo3 from '../../assets/logo-03.png'
import logo4 from '../../assets/logo-04.png'
import logo5 from '../../assets/logo-05.png'
import logo6 from '../../assets/logo-06.png'
import logo7 from '../../assets/logo-07.png'


const FeedSection = () => {
let images = [
    {id: 1, src: logo1, alt:"Logo"},
    {id: 2, src: logo2, alt: "Logo"},
    {id: 3, src: logo3, alt: "Logo"},
    {id: 4, src: logo4, alt: "Logo"},
    {id: 5, src: logo5, alt: "Logo"},
   // {id: 6, src: logo6, alt: "Logo"},
    {id: 7, src: logo7, alt: "Logo"}
]

  return (
    <div>
        <section className='container'>
            <div className="row">
                <div className="col-md-4">
                    <p className="lead-in">
                        In the ever-evolving landscape of frontend development, I navigate the intersection of technology and design,
                        infusing my work with enthusiasm to create interfaces that are both technically advanced and aesthetically pleasing.
                    </p>
                </div>
                <div className="col-md-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-md-flex">
                                <h1 className='bigtext'>100+</h1>
                                <h5>SUCCESSFUL COMPLETED PROJECTS</h5>
                            </div>
                            <div className="col-md-6 d-md-flex">
                                <h1 className='bigtext'>3</h1>
                                <h5>WORKING EXPERIENCE</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div className="row d-flex justify-content-center align-items-center">
            {
                images.map((image)=>(
                    <div className="col-md-2">
                        <img width={`${50}%`} src={image.src} alt={image.alt} key={image.id} />
                    </div>
                ))
            }
        </div>
        </section>
    </div>
  )
}

export default FeedSection
