import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetOrder from "../firestore.operations.files/getorder.js";
import {
  pdf,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "../../images/GoGrocers.png";
function PDF() {
  const { orderid } = useParams();
  const [order, setOrder] = useState({ orderdetail: [] });
  const [address, setAddress] = useState({});
  const currentDate = new Date();
  async function Get_Order(orderid) {
    const uid = localStorage.getItem("uid");
    try {
      const orderdata = await GetOrder(uid);
      for (let i of orderdata.completed) {
        if (i.id === orderid) {
          setOrder(i);
          setAddress(i.deliveryaddress);
          console.log("log order");
          console.log(i);
        }
      }
    } catch (err) {
      console.error("Error fetching order data:", err);
    }
  }

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

  useEffect(() => {
    Get_Order(orderid);
  }, []);
  const [pdfBlob, setPdfBlob] = useState(null);
  const generatePdf = async () => {
    try {
      const pdfBlob = await pdf(<PDF />).toBlob();
      setPdfBlob(pdfBlob);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  

  const downloadPdf = () => {
    generatePdf();
    if (pdfBlob) {
      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `GoGrocers_Order_${order.id}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <>
      <Document>
        <Page style={styles.page}>
          <Text style={styles.heading}>GoGrocers Order ID: {order.id}</Text>
          <Text style={styles.date}>{formatOrderTime(currentDate)}</Text>
          <br />
          <img src={logo} alt="Logo" style={styles.logo} />
          <br />
          <View style={styles.mainsection}>
            <Text>Order placed: {formatOrderTime(order.ordertime)}</Text>
            <Text>Order placed: {order.id}</Text>
            <Text>Order total: Rs {order.totalPrice}</Text>
          </View>
          <hr style={styles.line} />
          <View style={styles.section}>
            <Text style={styles.subheading}>ORDER DETAILS</Text>
            <hr style={styles.line} />
            {/* Add a table for order details */}
            <View style={styles.table}>
              {/* Add table headers */}
              <View style={styles.tableRow}>
                <View style={styles.tableCellheader}>Item</View>
                <View style={styles.tableCellheader}>Quantity</View>
                <View style={styles.tableCellheader}>Price</View>
              </View>
              {/* Add order details */}
              {order.orderdetail.map((item, index) => (
                <View style={styles.tableRow} key={index}>
                  <View style={styles.tableCell}>{item.name}</View>
                  <View style={styles.tableCell}>
                    {item.frequency} units each {item.weight}
                  </View>
                  <View style={styles.tableCell}>
                    ₹ {item.priceint * item.frequency} /-
                  </View>
                </View>
              ))}
            </View>
            <hr style={styles.line} />
            <View style={styles.mainsection}>
              <Text>Delivery Address</Text>
              <Text>
                {address.name}, {address.phonenumber}
              </Text>
              <Text>{address.street}</Text>
              <Text>
                {address.city}, {address.state}
              </Text>
            </View>
            <hr style={styles.line} />
            <Text style={styles.subheading}>Payment Method : COD</Text>
          </View>

          {/* Add other sections of the PDF, like summary and total */}
        </Page>
      </Document>
      <br />
      {/* <button style={{ margin: "40px" }} onClick={downloadPdf}>
        Download PDF
      </button> */}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    margin: 20,
  },
  line: {
    width: "90vw",
    alignSelf: "center",
    height: "1px",
    backgroundColor: "black",
    opacity: "25%",
    margin: "10px 0px 10px 40px",
  },
  logo: {
    marginLeft: "50px",
    marginTop: "20px",
    width: "170px",
    height: "50px",
    marginBottom: "40px",
  },
  mainsection: {
    marginLeft: "40px",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
    position: "absolute",
    top: "10px",
    left: "50%",
  },
  date: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 10,
    position: "absolute",
    top: "10px",
    left: "40px",
  },
  subheading: {
    fontSize: 15,
    fontWeight: "500",
    margin: "20px 0px 20px 40px",
  },
  table: {
    width: "100%",
    margin: "20px 0px 20px 40px",
    display: "flex",
    flexDirection: "column",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    height: 25,
    width: "25vw",
  },
  tableCellheader: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    height: 25,
    width: "25vw",
    fontWeight: "600",
  },
});

export default PDF;
