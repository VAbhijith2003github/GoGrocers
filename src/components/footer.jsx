import React from "react";
import "./styles.css"
function Footer()
{
  const Mailto=()=>
  {
    var email = "vabhijith2003@gmail.com";
    var subject = "Newsletter";
    var body = "I want to be notified of new offers coming up.";
    window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }
return(
  <div className="footer">
      <div className="footertext">
      <div className="suscribe" style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <h3 style={{ color: "white", paddingLeft: "10%", paddingRight: "10%", textShadow: "2px 2px 4px gray" }} id="brandtext">SUSCRIBE TO NEWSLETTER FOR OFFERS!</h3>
    <form action="/">
      <input type="email" className="suscribebox" name="email" autoComplete="on" style={{ width: "90%", backgroundColor: "#f0f0f5", marginLeft: "10%", height: "40px", border: "none",position:"relative",right:"15%" }} placeholder="            email@org.com" id="emailinputbox" />
      <button className="emailbutton" type="submit" style={{ width: "100px", height: "40px", position: "relative",left:"90%",bottom:"40px", backgroundColor: "#00cc00", border: "none"}}><h5>SUBMIT</h5></button>
    </form>
  </div>
      <h3 style={{paddingLeft:"0px",paddingTop:"50px"}}>GoGrocers</h3>
      <p style={{fontSize:"1.1em",margin :"auto",paddingLeft:"0px",paddingRight:"10px",paddingBottom:"50px" }} >"Our brand provides the best quality grocery delivery, with carefully selected products from trusted suppliers and experienced personal shoppers. We offer flexible delivery options to fit busy schedules and pride ourselves on exceptional customer service. Our goal is to provide a stress-free grocery shopping experience with high-quality products and friendly support.."</p>
      </div>
    <div className="row footerrow">  
      <i className="fa-brands fa-twitter ficon"></i>
      <i className="fa-brands fa-facebook-f ficon"></i>
      <i className="fa-brands fa-instagram ficon"></i>
      <i className ="fa-solid fa-envelope ficon" onClick={Mailto}></i>
    </div>
    <p style={{textAlign: "center",paddingLeft:"50px",paddingRight:"50px"}}>© Copyright 2023 GoGrocers || Created by <a href="https://github.com/VAbhijith2003github?tab=repositories" style={{color:"palevioletred"}}>Abhijith</a></p>
  </div>
    )
}
export default Footer;
