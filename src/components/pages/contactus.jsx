import React, { useState } from "react";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../elements/navbar.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        toast.error("query submitted", {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/success");
      } else {
        console.error("Failed to submit query");
        toast.error('Failed to submit query', {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="bannersec" id="dashboardsec">
        <section className="dashboardcards" id="contactussec">
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
              <button
                className="loginbutton"
                type="submit"
                id="contactusbutton"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
        <ToastContainer
          position="top-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
}

export default ContactUs;
