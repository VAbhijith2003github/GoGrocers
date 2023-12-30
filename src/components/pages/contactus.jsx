import React, { useState } from "react";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../elements/navbar.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetUser from "../firestore.operation.files/getuser.js";
import CreateQuery from "../firestore.operation.files/createquery.js";

function ContactUs() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userid = localStorage.getItem("uid");
    const userdetails = await GetUser(userid);
    const userEmail = userdetails.email;
    const query = e.target.query.value;
    CreateQuery(userid, userEmail, query);
    toast.success("Query sent! The team will get back to you shortly", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <>
      <NavBar />
      <div className="bannersec" id="dashboardsec">
        <section className="dashboardcards" id="contactussec">
          <div className="contactus">
            <h4>Contact Us</h4>
            <form onSubmit={handleSubmit}>
              <textarea
                id="contentquery"
                autoComplete="off"
                placeholder="Write any queries or suggestions"
                rows="4"
                wrap="soft"
                value={query}
                name="query"
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
