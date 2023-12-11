import React, { useContext} from 'react';
import "../../styles.css"
import cartpic from "../../images//shopping-cart.png";
import user from "../../images/user-interface.png";
import {Navbar,Nav, NavItem} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
  
function Navbars()
{
  const {cart} = useContext(MyContext);
 return(
    <div className= "container-fluid cont">
       <Navbar className= "bar" expand="lg">
       <Navbar.Brand as={Link} to="/"><h2 className="Title">GoGrocers</h2></Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{marginLeft:"75%"}}>
          <NavItem>
        <Link to="/login">
        <button className="navbuttons">
        <div className = "container"><img className ="navicon" src={user} alt="login"></img><h5>Login</h5></div>
        </button>
            </Link>
            </NavItem>
            <NavItem>
            <Link to="/cart">   
            <button className="navbuttons">  
            <div className = "container"><img className ="navicon" id="addtocart" src={cartpic} alt="cart"></img><h5>Cart<p style={{fontSize:"0.5em",float:"right",paddingLeft:"0.3em"}}>{cart.length===0?null:cart.length}</p></h5></div>
            </button>
            </Link>
            </NavItem>    
       </Nav>
      </Navbar.Collapse>
       </Navbar>
      </div>    
)};
    

export default Navbars;