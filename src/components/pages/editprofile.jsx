import React, { useState } from "react";
import "../../styles.css";
import NavBar from "../elements/navbar.jsx";

function ResetPassword() {
  <section className="dashboardcards" id="addresssec">
    <div className="address">
      <h4>Reset Password</h4>
      <form>
        <div>
          <label htmlFor="password">password</label>
          <br />
          <input type="text" name="password" />
          <br />
          <label htmlFor="repassword">confirm password</label>
          <br />
          <input type="text" name="password" />
          <br />
        </div>
      </form>
    </div>
  </section>;
}

function EditProfile() {
  return (
    <>
      <NavBar />
      <div className="bannersec" id="dashboardsec">
        <section className="dashboardcards" id="addresssec">
          <div className="address">
            <h4>Profile</h4>
            <form>
              <div className="addressinput">
                <div>
                  <label htmlFor="name">full Name</label>
                  <br />
                  <input type="text" name="fullname" />
                  <br />
                </div>
                <div>
                  <label htmlFor="name" id="statelabel">
                    mobile number
                  </label>
                  <br />
                  <input type="text" name="mobile number" id="phonenumber" />
                  <br />
                </div>
              </div>
              <button className="loginbutton" type="submit" id="addressbutton">
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default EditProfile;
