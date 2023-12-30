import React, { useEffect, useState } from "react";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../elements/navbar.jsx";
import GetUser from "../firestore.operation.files/getuser.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");

  const [user, setUser] = useState({
    name: "",
    phonenumber: "Not Set",
    email: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log(uid);
        const userdetails = await GetUser(uid);
        setUser({
          name: userdetails.name,
          phonenumber: userdetails.phonenumber
            ? userdetails.phonenumber
            : "Not Set",
          email: userdetails.email,
        });
      } catch (error) {
        toast.error("Error fetching user data", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };

    fetchUserData();
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
                <label htmlFor="phonenumber">phone number</label>
                <p>{user.phonenumber}</p>
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

export default Profile;
