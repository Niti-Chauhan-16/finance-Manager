import React, { useState, useEffect, useRef } from "react";
import { redirect, useNavigate } from "react-router-dom";
//import { Redirect,Navigate } from 'react-router-dom';
//import jQuery from "jquery";
import Dashboard from './Dashboard';


export default function Login() {
    var loginFormContainer;
    var signupFormContainer;
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //var navigate = useNavigate();
    function toggleActive(cls1, cls2) {
        console.log(cls1);
        if (cls1 != null && cls1.current.classList.contains("hide")) {
          cls1.current.classList.remove("hide");
          cls2.current.classList.add("hide");
        } else {
          console.log("not working");
        }
      }
      
      
      function activeLogin() {
        toggleActive(loginFormContainer, signupFormContainer);
      }
      
      function activeSignUp() {
        toggleActive(signupFormContainer, loginFormContainer);
      }


  const [credentials, setCredentials] = useState({
    
    email: "",
    password: "",
  });

  const[sign_credentials,set_sign_credentials]=useState({
    username:"",
    password:"",
    email:""
  })

   //let history = useNavigate();

  // console.log(loginFormContainer);
  loginFormContainer = useRef(null);
  signupFormContainer = useRef(null);
  const navigate = useNavigate();

 

   const handleLogin =  async (e) => {
      e.preventDefault();  

      try{
      const data={username:credentials.username,password:credentials.password} 
      var head = { Accept: "application/json, text/plain, */*", "Content-Type": "application/x-www-form-urlencoded" };
      const response = await fetch("http://localhost:3000/signin", {
       method: "POST",
       mode: "cors",
       headers: head,
       body: JSON.stringify({
        email:credentials.email,
        password:credentials.password
       })
     });

     const responseData = await response.json(); // Parse response as JSON

      if (response.status === 400) {
        alert("User exists");

      } 
      else if (response.status === 201) {
        alert("Successfully logged in");
        setIsAuthenticated(true);
        
        var userdata=responseData.user;
        userdata=JSON.stringify(userdata)

        localStorage.setItem('Token', responseData.token);
        localStorage.setItem('user', userdata);
 
       // Redirect to the dashboard (assuming 'navigate' is a function for navigation)
       navigate('/dashboard');
 
       console.log("Response Data:", responseData); // Print the response data
      }
    } 
    catch (error) {
      console.log("An error occurred:", error);
    }
      
   }
 

  const handleSignup = async (e) => {
      e.preventDefault();  
      const data={username:credentials.username,password:credentials.password} 
      var head = { Accept: "application/json, text/plain, */*", "Content-Type": "application/x-www-form-urlencoded" };
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        mode: "cors",
        headers: head,
        body: JSON.stringify({
       
          username:sign_credentials.username,
          email:sign_credentials.email,
          password:sign_credentials.password

       })
     }).
     then((response) => {
          console.log(response)
          if (response.status==400) {
             alert("User exists")
          }
          else if(response.status==201){
            alert("successfull signup")
            
          }
    }).
    then(res =>console( res.json()))            
     .catch(error => {
           console.log("already exits")
       })


  };

  const{username,password}=credentials;

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onChange1=(e)=>{
    set_sign_credentials({...sign_credentials,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <div className="loginPage">
        <div className="loginPage__leftside">
          <div
            className="loginPage--logo"
            onClick={() => navigate("/", { replace: true })}
          >
            <a> ₹upeeWise</a>
          </div>
          <div className="loginPage--headingbox">
            <h1 className="loginPage--hero">
              Welcome to
              <br />
              RupeeWise
            </h1>
            <p className="loginPage--para">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod. */}
            </p>
          </div>
        </div>
        <div className="loginPage__rightside">
          {/* <!-- login --> */}

          <div ref={loginFormContainer} className="loginform--container">
            <h2 className="login--text">Log in</h2>
            <div className="input--area">
              <div className="username--wrapper input--field">
                <label htmlFor="email">Email</label>
                <br />
                <div className="loginInput--box">
                  <input
                    type="email"
                    name="email"
                    className="login--uname"
                    value={credentials.email}
                    onChange={onChange}
                  />
                  <span className="material-symbols-rounded i-check hide">
                    check
                  </span>
                  <span className="material-symbols-rounded i-exclaim hide">
                    exclamation
                  </span>
                </div>
              </div>
              <div className="password--wrapper input--field">
                <label htmlFor="password">Password</label>
                <br />
                <div className="loginInput--box">
                  <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                    className="login--pass"
                  />
                  <span className="material-symbols-rounded i-check hide">
                    check
                  </span>
                  <span className="material-symbols-rounded i-exclaim hide">
                    exclamation
                  </span>
                </div>
              </div>

              <div className="submit--wrapper">
                <button
                  type="submit"
                  className="btn btn--login"
                  onClick={handleLogin}
                >
                  Log in
                </button>
              </div>
              <div className="forgot--wrapper">
                <span className="forgot--text">Forgot Password?</span>
              </div>
              <div className="create--wrapper">
                <span onClick={activeSignUp} className="create--text">
                  Create an Account
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Sign up --> */}
          <div ref={signupFormContainer} className="signupform--container hide">
            <h2 className="signup--text">Sign Up</h2>
            <div className="input--area">
              <div className="username--wrapper input--field">
                <div className="label--wrapper">
                  <label htmlFor="username">Username</label>
                  <span className="alert--text hide">Already Exist</span>
                </div>
                <div className="signupInput--box">
                  <input
                    type="text"
                    name="username"
                    className="signup--uname"
                    value={sign_credentials.username}
                    onChange={onChange1}
                  />
                  <span className="material-symbols-rounded i-check hide">
                    check
                  </span>
                  <span className="material-symbols-rounded i-exclaim hide">
                    exclamation
                  </span>
                </div>
              </div>
              <div className="email--wrapper input--field">
                <div className="label--wrapper">
                  <label htmlFor="email">Email</label>
                  <span className="alert--text hide">Already Exist</span>
                </div>
                <div className="signupInput--box">
                  <input type="email" name="email" className="signup--email"
                   value={sign_credentials.email}
                    onChange={onChange1} />
                  <span className="material-symbols-rounded i-check hide">
                    check
                  </span>
                  <span className="material-symbols-rounded i-exclaim hide">
                    exclamation
                  </span>
                </div>
              </div>
              <div className="password--wrapper input--field">
                <label htmlFor="password">Password</label>
                <br />
                <div className="signupInput--box">
                  <input
                    type="password"
                    name="password"
                    className="signup--pass"
                    value={sign_credentials.password}
                    onChange={onChange1}
                  />
                  <span className="material-symbols-rounded i-check hide">
                    check
                  </span>
                  <span className="material-symbols-rounded i-exclaim hide">
                    exclamation
                  </span>
                </div>
              </div>
              <div className="submit--wrapper">
                <button
                  type="submit"
                  className="btn btn--signup"
                  onClick={handleSignup}
                >
                  Sign up
                </button>
              </div>
              <div className="already--wrapper">
                <span onClick={activeLogin} className="alreadyacc--text">
                  Already have an Account
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}