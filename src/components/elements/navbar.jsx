import "../../styles.css";
import { Link } from "react-router-dom";
import login from "../../images/user.png"
import cart from "../../images/cart.png"
import search from "../../images/search.png"


const Navbarcomp = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div class="topnav" id="myTopnav">
      <Link to="/" className="navitem">
        <h1 className="navbrand">GoGrocers</h1>
      </Link>
      <Link id="searchbar">
        <input
          type="text"
          className="search-bar"
          placeholder="search"
          id="search"
        />
        <img src={search} alt="search icon" className="navicon" style={{position:"relative",right:"50px",opacity:"50%"}}/>
      </Link>
      <Link to="/cart" className="navitem">
      <img src={cart} alt="cart" className="navicon"/>
        CART
      </Link>
      <Link to="/login" className="navitem">
        <img src={login} alt="login" className="navicon"/>
        SIGN&nbsp;IN
      </Link>
      <Link to="javascript:void(0);" class="icon" onClick={myFunction}>
        <i class="fa fa-bars"></i>
      </Link>
    </div>
  );
};

export default Navbarcomp;
