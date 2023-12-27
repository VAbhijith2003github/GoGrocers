import React, { useState } from "react";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../elements/navbar.jsx";

function Addresses() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "";
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query }),
      });

      if (response.ok) {
        console.log("Query submitted successfully");
        alert("query submitted");
        navigate("/success");
      } else {
        console.error("Failed to submit query");
        alert("failed to submit query");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  return (
    <>
      <NavBar />
      <div className="bannersec" id="dashboardsec">
        <section className="dashboardcards" id="addresssec">
          <div className="address">
            <h4>Add Address</h4>
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
              <label htmlFor="pincode">pincode</label>
              <br />
              <input type="number" name="pincode" />
              <br />
              <label htmlFor="street">house / street</label>
              <br />
              <input type="text" name="street" />
              <br />
              <label htmlFor="landmark">landmark</label>
              <br />
              <input type="text" name="landmark" />
              <br />
              <div className="addressinput">
                <div>
                  <label htmlFor="city">city</label>
                  <br />
                  <input type="text" name="city" />
                  <br />
                </div>
                <div>
                  <label htmlFor="state" id="statelabel">
                    state
                  </label>
                  <br />
                  <select name="state" id="state">
                    <option value="">Select a state</option>
                    {statesInIndia.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
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

export default Addresses;
