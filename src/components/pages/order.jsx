import React, { useEffect, useState } from "react";
import "../../styles.css";
import NavBar from "../elements/navbar";
import { toast, ToastContainer } from "react-toastify";
import GetOrder from "../firestore.operations.files/getorder";
import { useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase-config.js";
import { useNavigate } from "react-router-dom";

function Order() {
  const { orderid } = useParams();
  const [order, setOrder] = useState({ orderdetail: [] });
  const navigate = useNavigate();
  const auth = getAuth(app);

  async function Get_Order(orderid) {
    const uid = localStorage.getItem("uid");
    try {
      const orderdata = await GetOrder(uid);
      for (let i of orderdata.onorder) {
        if (i.id === orderid) {
          setOrder(i);
        }
      }
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

  useEffect(() => {
    Get_Order(orderid);
  }, [orderid]);

  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      toast.error("Please login to continue", {
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
        navigate("/login");
      }, 2000);
    }
  });

  const formatOrderTime = (ordertime) => {
    if (ordertime instanceof Date) {
      return ordertime.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
    } else if (ordertime && ordertime.toDate) {
      const orderTime = ordertime.toDate();
      return orderTime.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
    } else {
      return "Invalid Date";
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="checkoutsec">
          <section className="dashboardcards" id="checkoutsec">
            <h1 className="checkoutheadings">
              VIEW&nbsp;ORDER&nbsp;&nbsp;INFORMATION
            </h1>
            <hr />
            <table className="tablecheckout" id="ordersummarytable">
              <tbody className="orderdetailtab">
                <tr>
                  <td>Order date / time:</td>
                  <td>{formatOrderTime(order.ordertime)}</td>
                </tr>
                <tr>
                  <td>Order id:</td>
                  <td>{order.id}</td>
                </tr>
                <tr>
                  <td>Bill Total:</td>
                  <td>₹&nbsp;{order.totalPrice - order.discount + 50}</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <h2 className="checkoutheadings">ORDERS&nbsp;&nbsp;DETAILS</h2>
            <hr />
            <div>
              <table className="tablecheckout" id="list">
                <tr>
                  <th id="index">S.No</th>
                  <th>name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
                {order.orderdetail.map((item, index) => (
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
                    <td>₹&nbsp;{order.totalPrice}</td>
                  </tr>
                  <tr>
                    <td>Delivery&nbsp;charge&nbsp;:</td>
                    <td>₹&nbsp;50</td>
                  </tr>
                  <tr>
                    <td>Discount&nbsp;:</td>
                    <td>₹&nbsp;{order.discount}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Bill&nbsp;Total&nbsp;:</td>
                    <td style={{ fontWeight: 600 }}>
                      ₹&nbsp;{order.totalPrice - order.discount + 50}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
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

export default Order;
