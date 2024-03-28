import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="footer">
      <div className="footer--container">
        <div className="footer--bar">
          <div className="footer--logo">
            <p className="logo--text u-white"><span>₹</span>upeeWise</p>
          </div>
        </div>
        <hr />
        <div className="copyright__bar">
          <div className="copyright__box">
            <div className="copyright__text--left">
              <p>©2023 ₹upeeWise. All rights reserved</p>
            </div>
            <div className="copyright__text--right">
              <span className="material-symbols-outlined i-support">
                support_agent
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="contact--number"
                >24/7 &nbsp;&nbsp;&nbsp;037-2339-9874</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}