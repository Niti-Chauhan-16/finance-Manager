import React from 'react'
import contact from './images/Contact us.png';
export default function Contact() {
  return (
    <div>
       <div id="contact" class="form">
        <div class="form__container section">
          <div class="row">
            <div class="row--container">
              <div class="col-2-of-3">
                <div class="form__img-box">
                  <img src={contact} alt="Contact Us" />
                </div>
              </div>
              <div class="col-1-of-3">
                <div class="form--box">
                  <div class="form--heading-text">
                    <h2 class="form--text">Get in touch</h2>
                  </div>
                  <div class="input--box">
                    <input
                      type="text"
                      class="form__input"
                      name="fname"
                      placeholder="Full Name"
                    />
                    <br />
                    <input
                      type="email"
                      class="form__input"
                      name="email"
                      placeholder="Email Address"
                    />
                    <br />
                    <textarea
                      name="message"
                      rows="10"
                      cols="20"
                      placeholder="Message"
                    ></textarea>
                    <button class="btn btn--submit">Submit</button>
                  </div>  
                 </div>
               </div>
              </div>
            </div>
          </div>
       </div>
        



      {/* <div id="contact" className="form"> */}
      {/* <div className="form__container section">
        <div className="row">
          <div className="row--container">
            <div className="col-2-of-3">
              <div className="form__img-box">
                <img src={contact} alt="Contact Us" />
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="form--box">
                <div className="form--heading-text">
                  <h2 className="form--text">Get in touch</h2>
                </div>
                <div className="input--box">
                  <input
                    type="text"
                    className="form__input"
                    name="fname"
                    placeholder="Full Name"
                  /><br />
                  <input
                    type="email"
                    className="form__input"
                    name="email"
                    placeholder="Email Address"
                  /><br />
                  <textarea
                    name="message"
                    rows="10"
                    cols="30"
                    placeholder="Message"
                  ></textarea>
                  <button className="btn btn--submit">Submit</button>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
     {/* </div>
     </div> 
     </div>
     </div>
     </div> */}
     </div>
  );
}