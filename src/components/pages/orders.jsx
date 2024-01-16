import React, { useEffect, useState } from "react";
import "../../styles.css";
import NavBar from "../elements/navbar";
import { toast, ToastContainer } from "react-toastify";
import GetOrder from "../firestore.operation.files/getorder";
import arrow from "../../images/accmedia/arrow.png";

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function getorderdata() {
      const uid = localStorage.getItem("uid");
      const orderdata = await GetOrder(uid);
      setOrders(orderdata.onorder);
      console.log(orderdata.orders[0].ordertime);
    }
    getorderdata();
  }, []);

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
        <div style={{ width: "100%" }}>
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
                    <img
                      src={arrow}
                      alt="arrow"
                      style={{
                        height: "15px",
                        width: "15px",
                        opacity: "0.5",
                        marginLeft: "10px",
                      }}
                    />
                    <img
                      src={arrow}
                      alt="arrow"
                      style={{ height: "15px", width: "15px", opacity: "0.5" }}
                    />
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
