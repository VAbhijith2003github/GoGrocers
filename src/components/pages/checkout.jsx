import React, { useContext, useEffect, useState } from "react";
import Navbar from "../elements/navbar";
import GetUser from "../firestore.operation.files/getuser";
import { MyContext } from "../../App";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddUserOrder from "../firestore.operation.files/adduserorder";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addresses, setAddresses] = useState([]);
  const { discount } = useContext(MyContext);
  const [selectedAddress, setSelectedAddress] = useState({});
  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    async function FetchDetails() {
      try {
        const user = await GetUser(uid);
        console.log(user.address);
        setAddresses(user.address);
        setCart(user.cart);
        const totalPrice = user.cart.reduce((sum, item) => {
          return sum + item.priceint * item.frequency;
        }, 0);
        setTotalPrice(totalPrice);
      } catch (err) {
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
    }
    FetchDetails();
  }, []);

  async function AddOrder() {
    const uid = localStorage.getItem("uid");
    const currentDate = new Date();
    const order = {
      deliveryaddress: selectedAddress,
      orderdetail: cart,
      orderbillamount: totalPrice,
      ordertime: currentDate,
    };
    try {
      await AddUserOrder(uid, order);
      toast.success("Order placed succesfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const redirectToNewRoute = () => {
        window.location.href = "/profile/yourorders";
      };
      setTimeout(() => {
        redirectToNewRoute();
      }, 3000);
    } catch (err) {
      toast.error("Error adding error", {
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
  }

  return (
    <>
      <Navbar />
      <div>
        <div className="checkoutsec">
          <section className="dashboardcards" id="checkoutsec">
            <h2 className="checkoutheadings" id="setaddress">
              SET&nbsp;&nbsp;DELIVERY&nbsp;ADDRESS
            </h2>
            <div className="card-grid">
              {
                <>
                  {addresses &&
                    addresses.map((address, index) => (
                      <div
                        key={index}
                        className="dashboardcard"
                        id="addresscard"
                      >
                        <label htmlFor="pincode">PINCODE</label>
                        <h4>{address.pincode}</h4>
                        <br />
                        <p>Phone Number : {address.phonenumber}</p>
                        <p>
                          {address.name}, {address.street}
                        </p>
                        <p>{address.landmark}</p>
                        <p>
                          {address.city}, {address.state}
                        </p>
                        <button
                          className={`radiobuttoncheckout ${
                            selectedAddress === address ? "selected" : ""
                          }`}
                          onClick={() => handleSelectAddress(address)}
                        ></button>
                      </div>
                    ))}
                </>
              }
            </div>
            <div></div>
            <hr />
            <h2 className="checkoutheadings">CHECKOUT&nbsp;&nbsp;DETAILS</h2>
            <div>
              <table className="tablecheckout" id="list">
                <tr>
                  <th id="index">S.No</th>
                  <th>name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
                {cart.map((item, index) => (
                  <>
                    <tr>
                      <td id="index">{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        {item.frequency} units each {item.weight}
                      </td>
                      <td>₹&nbsp;{item.priceint * item.frequency}&nbsp;/-</td>
                    </tr>
                  </>
                ))}
              </table>
            </div>
            <hr />
            <h2
              className="checkoutheadings"
              style={{ color: "red", fontWeight: "650" }}
            >
              ORDER&nbsp;&nbsp;SUMMARY
            </h2>
            <hr />
            <div className="ordersummary">
              <table className="tablecheckout" id="ordersummarytable">
                <tr>
                  <td>Order&nbsp;total&nbsp;:</td>
                  <td>₹&nbsp;{totalPrice}</td>
                </tr>
                <tr>
                  <td>Delivery&nbsp;charge&nbsp;:</td>
                  <td>₹&nbsp;50</td>                 
                </tr>
                <tr>
                  <td>Discount&nbsp;:</td>
                  <td>₹&nbsp;{discount}</td>
                </tr>
                <tr>
                  <td>Bill&nbsp;Total&nbsp;:</td>
                  <td>₹&nbsp;{totalPrice - discount + 50}</td>
                </tr>
                {/* <div id="ordersummarydiv">
                <p>Order&nbsp;total&nbsp;:</p>
                <p>Delivery&nbsp;charge&nbsp;:</p>
                <p>Discount&nbsp;:</p>
                <hr />
                <p style={{ fontWeight: "600" }}>Bill&nbsp;Total&nbsp;:</p>
              </div>
              <div id="ordersummarydiv">
                <p>₹ {totalPrice}</p>
                <p>₹ 50</p>
                <p>₹ {discount}</p>
                <hr />
                <p style={{ fontWeight: "600" }}>
                  ₹ {totalPrice - discount + 50}
                </p>
              </div> */}
              </table>
            </div>
            <button className="checkoutbutton" onClick={AddOrder}>
              Proceed to payment
            </button>
          </section>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(180, 180, 180, 0.300)",
          paddingBottom: "30px",
        }}
      >
        <div className="row footerrow">
          <i className="fa-brands fa-twitter ficon"></i>
          <i className="fa-brands fa-facebook-f ficon"></i>
          <i className="fa-brands fa-instagram ficon"></i>
          <i className="fa-solid fa-envelope ficon"></i>
        </div>
        <p
          style={{
            textAlign: "center",
            position: "relative",
            right: "15px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          © Copyright 2023 GoGrocers || Created by{" "}
          <a
            href="https://github.com/VAbhijith2003github?tab=repositories"
            style={{ color: "palevioletred" }}
          >
            Abhijith
          </a>
        </p>
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

export default Checkout;
