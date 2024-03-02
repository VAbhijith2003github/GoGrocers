import "../../styles.css";
import { Link } from "react-router-dom";
import login from "../../images/user.png";
import cart from "../../images/cart.png";
import search from "../../images/search.png";
import { useState, useEffect } from "react";

const Navbarcomp = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loginLink, setLoginLink] = useState("/login");
  const [name, setName] = useState("You");

  useEffect(() => {
  onLoad();
  }, [authenticated]);

  async function onLoad() {
    // console.log(authenticated);
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    if (name && name !== "" && name !== "null") {
      const truncatedName = name.substring(0, 20);
      setName(truncatedName);
    }
    if (localStorage.getItem("authenticated") === "true" && token) {
      setAuthenticated("true");
      setLoginLink("/dashboard");
    }
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div className="topnav" id="myTopnav">
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
        <img src={search} alt="search icon" id="searchicon" />
      </Link>
      <Link to="/cart" className="navitem">
        <img src={cart} alt="cart" className="navicon" />
        CART
      </Link>
      <Link to={loginLink} className="navitem">
        {authenticated === false ? (
          <>
            <img src={login} alt="login" className="navicon" />
            SIGN&nbsp;IN
          </>
        ) : (
          <>
            <img src={login} alt="login" className="navicon" />
            {name}
          </>
        )}
      </Link>
      <Link className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </Link>
    </div>
  );
};

export default Navbarcomp;
