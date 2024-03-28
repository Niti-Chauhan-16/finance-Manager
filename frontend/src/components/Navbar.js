import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Link} from 'react-router-dom';
import Landing from './Landing';
import { Routes,Route,useNavigate ,Router} from 'react-router-dom';
import Login from './Login';


export default function Navbar() {
  
  const navigate=useNavigate();
  return (
    <div>
      <div id="navbar" className="navbar">
        <div className="navbar__container">
          <div className="navbar__box">
            <div className="navbar__box-left">
              <div className="logo">
                <p className="logo--text">₹upeeWise</p>
              </div>
              <ul className="navbar__ul">
                <li className="navbar__ul--li">
                  <Link to="#header">Home</Link>
                </li>
                <li className="navbar__ul--li">
                  <Link to="#about" smooth>
                    About Us
                  </Link>
                </li>
                <li className="navbar__ul--li">
                  <Link to="#features">Features</Link>
                </li>
                <li className="navbar__ul--li">
                  <Link to="#contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="navbar__box--right">
              <button
                className="btn btn--signin"
                onClick={() => navigate("/login", { replace: true })}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }