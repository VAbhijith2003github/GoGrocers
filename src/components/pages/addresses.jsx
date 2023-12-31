import React, { useState } from "react";
import "../../styles.css";
import NavBar from "../elements/navbar.jsx";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateAddress from "../firestore.operation.files/updateaddress.js";

function Addresses() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    pincode: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uid = localStorage.getItem("uid");
    const address = formData;
    try {
      UpdateAddress(uid, address);
      toast.success("Address added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setTimeout(() => {
        navigate("/profile");
      }, 3000);
    } catch (error) {
      console.error("Error adding address:", error);
      toast.error("Error adding address", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="bannersec" id="dashboardsec">
        <section className="dashboardcards" id="addresssec">
          <div className="address">
            <h4>Add Address</h4>
            <form onSubmit={handleSubmit}>
              <div className="addressinput">
                <div>
                  <label htmlFor="name">Full Name</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="phonenumber" id="statelabel">
                    Phone Number
                  </label>
                  <br />
                  <input
                    type="text"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    id="phonenumber"
                  />
                  <br />
                </div>
              </div>
              <label htmlFor="pincode">Pincode</label>
              <br />
              <input
                type="number"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
              <br />
              <label htmlFor="street">House / Street</label>
              <br />
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
              />
              <br />
              <label htmlFor="landmark">Landmark</label>
              <br />
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
              />
              <br />
              <div className="addressinput">
                <div>
                  <label htmlFor="city">City</label>
                  <br />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="state" id="statelabel">
                    State
                  </label>
                  <br />
                  <select
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                  >
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

export default Addresses;
