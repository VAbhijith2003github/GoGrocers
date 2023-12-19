import React, { useContext } from "react";
import "../../styles.css";
import $ from "jquery";
import Navbar from "../elements/navbar";
import pp from "../../images/packaged_product images/ppimg";
import { MyContext } from "../../App";

function Vegetables() {
  const { updatecart } = useContext(MyContext);
  return (
    <div className="vegetables">
      <Navbar />
      <section className="vegetablessec">
        <section className="cardsproduct">
          <div className="row">
            {pp.map((pp, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 colelement cardbg"
              >
                <div className="imgdiv">
                  <img className="cardimgproduct" src={pp.src} alt="pic" />
                </div>
                <p className="cardtextproduct">{pp.name}</p>
                <div className="infodev">
                  <button
                    className="productaddtocart"
                    onClick={() => {
                      updatecart({
                        name: pp.name,
                        price: pp.price,
                        src: pp.src,
                        priceint: pp.priceint,
                        weight: pp.weight,
                        unit: "gm",
                        type: "veg",
                      });

                      $("#addtocart").addClass("animatecart");
                      setTimeout(function () {
                        $("#addtocart").removeClass("animatecart");
                      }, 100);
                    }}
                  >
                    ADD
                  </button>
                  <h4 className="productprice">{pp.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
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
    </div>
  );
}

export default Vegetables;
