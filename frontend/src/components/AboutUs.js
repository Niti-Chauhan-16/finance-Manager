import React from 'react'

export default function AboutUs() {
  return (
    <div>
      <div id="about" className="about">
      <div className="about__container section">
        <div className="row">
          <div className="row--container">
            <div className="col-1-of-2">
              <div className="about--left">
                <h2 className="about--text">About Us.</h2>
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="about--right">
                <p className="about--para">
                  We are a group of ambitious friends who are trying their best in making lives easier. 
                  RupeeWise is our first major step in that direction. Looking forward to serving you!     
                </p>
                <button className="btn btn--learn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}