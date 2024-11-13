/*import React, { useState } from "react";
import './LoginSignUp.css'
import { useNavigate } from "react-router-dom";

import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'
import user_icon from '../Assests/person.png'

const LoginSignUp = () => {
  const navigate=useNavigate();
  const Submit=()=>
  {
    navigate('/home')
  }
    const [action,setAction] = useState("Sign up");
    return(
        <>
        <div className="con">
        <div className="container" >
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} style={{height:"30px"}} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}
                
                
                <div className="input">
                    <img src={email_icon} style={{height:"30px"}} alt="" />
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                    <img src={password_icon} style={{height:"30px"}} alt="" />
                    <input type="password"  placeholder="Password"/>
                </div>
            </div>
            {action==="Sign up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click here</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
                <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div> 
            </div> 
            <button className="hlo" onClick={Submit}>Submit</button>
        </div>
        </div>
        </>

    );
};

export default LoginSignUp;*/
import React, { useState } from "react";
import './LoginSignUp.css';
import { useNavigate } from "react-router-dom";

import email_icon from '../Assests/email.png';
import password_icon from '../Assests/password.png';
import user_icon from '../Assests/person.png';

const LoginSignUp = () => {
  const navigate = useNavigate();
  
  const [action, setAction] = useState("Sign up");

  const handleSubmit = () => {
    navigate('/home');
  };

  return (
    <div className="con">
      <div className="container">
        <header className="header">
          <h1 className="text">{action}</h1>
          <div className="underline"></div>
        </header>

        <div className="inputs">
          {action === "Login" ? null : (
            <div className="input">
              <img src={user_icon} style={{ height: "30px" }} alt="User icon" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} style={{ height: "30px" }} alt="Email icon" />
            <input type="email" placeholder="Email Id" />
          </div>

          <div className="input">
            <img src={password_icon} style={{ height: "30px" }} alt="Password icon" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        {action === "Sign up" ? null : (
          <div className="forgot-password">
            Lost Password? <span>Click here</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={`submit ${action === "Login" ? "gray" : ""}`}
            onClick={() => setAction("Sign up")}
          >
            Sign up
          </div>

          <div
            className={`submit ${action === "Sign up" ? "gray" : ""}`}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>

        <button className="hlo" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default LoginSignUp;
