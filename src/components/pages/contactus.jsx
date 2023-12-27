import React, { useState } from "react";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../elements/navbar.jsx";

function ContactUs() {
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

  return (
    <>
      <NavBar />
      <div className="bannersec" id="dashboardsec">
        <section className="dashboardcards">
          <div className="contactus">
            <h4>Contact Us</h4>
            <form>
              <textarea
                id="contentquery"
                autoComplete="off"
                placeholder="Write any queries or suggestions"
                rows="4"
                wrap="soft"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              ></textarea>
              <br />
              <button className="loginbutton" type="submit">
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
