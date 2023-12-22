import React from "react";
import "../../styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div style={{ height: "80px", backgroundColor: "rgb(68, 184, 76)" }}>
        <Link
          to="/"
          className="navbrandlogin"
          id="loginlogo"
        >
          <h2 className="Title" style={{paddingTop:"15px",paddingLeft:"15px"}}>GoGrocers</h2>
        </Link>
      </div>
      <div className="login containery">
        <h1 className="headinglogin">LOGIN</h1>
        <hr className="loginline" />
        <form action="/login" className="loginform">
          <input type="email" name="email" placeholder="your_email@org.com" />
          <input type="password" name="password" placeholder="password" />
          <button className="loginbutton">Login</button>
        </form>
        <hr className="loginline" id="line" />
        <button className="loginbutton" id="google">
        <i class="fab fa-google icon" style={{paddingRight:"10px"}}></i>
          Sign in with Google
        </button>
        <Link to="/signup" className="createacc">
          create an account ?
        </Link>
        <div></div>
      </div>
    </div>
  );
}

export default Login;
