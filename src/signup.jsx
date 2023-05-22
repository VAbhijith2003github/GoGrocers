import React from "react";
import "./components/styles.css"
import { Link } from 'react-router-dom';

function signup()
{
  return(
    <div>
    <div style={{height:"80px",backgroundColor:"rgb(68, 184, 76)"}}>
    <Link to="/" className= "navbar-brand logo" style={{position:"relative",top:"15px"}}><h2 className="Title">GoGrocers</h2></Link>
    </div>
    <div style={{ paddingBottom: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div className="logindiv" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
    <h2 className="usertext" style={{fontWeight:"bold",color:"rgba(0, 188, 41, 0.707)",textShadow:"2px 2px 2px bisque",paddingLeft:"0%"}}>USER SIGNUP</h2>
    <form action="/">
      <input type="email" className="entry" name = "email" placeholder="your_email@org.com" style={{}}/><br/>
      <input type="password" className="entry" name = "password" placeholder="enter new password" style={{}}/><br/>
      <input type="password" className="entry" name = "password" placeholder="re-enter new password" style={{}}/><br/>
      <button type="submit" className="entry" style={{borderRadius:"5%",width:"78%",backgroundColor:"rgba(0, 188, 41, 0.707)",margin:"30px",color:"white",padding:"15px",marginLeft:"5px",fontWeight:"600",fontSize:"1.2em"}}>LOGIN</button><br/>
      <hr style={{backgroundColor:"black",width:"400px",position:"relative",bottom:"15px"}}/>
      <div className = "row">
        <div className="col">
        <label htmlFor="suscribe" className="entrylabel" style={{paddingBottom:"20px"}}><h6 style={{color:"green",fontWeight:"500",position:"relative",left:"15px"}}>SUSCRIBE NEWSLETTER</h6></label>
        <input type="checkbox" name="suscribe" className="entry" style={{scale:"1.5"}}/>
        </div>
        <div className="col-6" style={{paddingLeft:"100px"}}>
        <h6 style={{fontWeight:"500",fontSize:"0.9em",position:"relative",right:"5%",top:"3px",color:"green"}}><Link to="/Login" style={{color:"green"}}>HAVE AN ACCOUNT ?</Link></h6>
        </div>
        </div>     
      </form>
      </div>
      </div>
      </div>
  );  
}

export default signup;