import React, { useEffect, useState } from "react";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../elements/navbar.jsx";

function Profile() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const [user, setUser] = useState({
    name: name,
    mobilenumber: "Not Set",
    email: email,
  });

  useEffect(() => {
    if(name==="null")
    {
        setUser((prevUser) => ({
            ...prevUser,
            name: "Not Set"
          }));
    }
  }, []);
    
  return (
    <>
      <NavBar />
      <div className="bannersec" id="dashboardsec">
        <section className="dashboardcards" id="addresssec">
          <div className="address" id="profile">
            <h4>Profile</h4>
            <div className="addressinput">
              <div>
                <label htmlFor="name">full Name</label>
                <p>{user.name}</p>
                <label htmlFor="mobilenumber">mobile number</label>
                <p>{user.mobilenumber}</p>
              </div>
            </div>
            <div className="addressinput">
              <div>
                <label htmlFor="email">email:&nbsp;&nbsp;&nbsp;</label>
                <p>{user.email}</p>
                <br />
              </div>
            </div>
            <button
              className="loginbutton"
              type="submit"
              id="addressbutton"
              onClick={() => navigate("/profile/edit")}
            >
              Edit
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Profile;
