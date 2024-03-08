import React, { useEffect, useState } from "react";
import "../../styles.css";
import NavBar from "../elements/navbar";
import { toast, ToastContainer } from "react-toastify";
import GetOrder from "../firestore.operations.files/getorder";
import arrow from "../../images/accmedia/arrow.png";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase-config.js";
import { useNavigate } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const auth = getAuth(app);
  useEffect(() => {
    async function getorderdata() {
      const uid = localStorage.getItem("uid");
      try {
        const orderdata = await GetOrder(uid);
        setOrders(orderdata.onorder);
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
        console.log(err);
      }
    }
    getorderdata();
  }, []);

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
      });
    } else if (ordertime && ordertime.toDate) {
      const orderTime = ordertime.toDate();
      return orderTime.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } else {
      return "Invalid Date";
    }
  };

  return (
    <>
      <NavBar />
      <div className="orderindicator">
        <span>Arriving</span>
        <span>Past Orders</span>
      </div>
      <div className="bannersec" id="dashboardsec">
        <div style={{ width: "100%" }} className="ordersdiv">
          {orders.map((order, index) => (
            <>
              <div className="order">
                <p className="orderid">Order&nbsp;id&nbsp;:&nbsp;{order.id}</p>
                <br />
                <div className="imageorderdiv">
                  {order.orderdetail.map((item, index) => (
                    <>
                      <img
                        src={item.src}
                        alt={item.name}
                        className="imageorder"
                      />
                    </>
                  ))}
                </div>
                <br />
                <div className="ordertextdiv">
                  <p className="ordertime">
                    {formatOrderTime(order.ordertime)}
                  </p>
                  <p className="orderdetailbtn">
                    order details
                    <Link to={`/profile/yourorders/${order.id}`}>
                      <img
                        src={arrow}
                        alt="arrow"
                        className="orderlink"
                        style={{
                          height: "15px",
                          width: "15px",
                          opacity: "0.5",
                          marginLeft: "10px",
                        }}
                      />
                      <img
                        src={arrow}
                        className="orderlink"
                        alt="arrow"
                        style={{
                          height: "15px",
                          width: "15px",
                          opacity: "0.5",
                        }}
                      />
                    </Link>
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
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
      </div>
    </>
  );
}

export default Orders;
