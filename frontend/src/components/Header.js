import React from 'react'
import header12 from './images/header_Img.png';
import { useNavigate } from 'react-router-dom';

export default function Header1() {
  const navigate=useNavigate();
  return (
    <div>
      <div id="header" className="header">
      <div className="header__container">
        <div className="row">
          <div className="row--container">
            <div className="col-1-of-2">
              <div className="header__container--left">
                <h1 className="hero--text">
                  Organise You<span className="hero--text-symbol">₹</span> Money
                </h1>
                {/* <p className="hero--para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
                <button className="btn btn--createacc" onClick={()=>navigate('/login',{replace:true})} >Create an Account</button>
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="header__container--right">
                <img src={header12} alt="header-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}