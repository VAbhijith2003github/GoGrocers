import React, { useContext} from 'react';
import "./components/styles.css"
import $ from "jquery";
import Header from "./components/header";
import cp from "./components/accfiles/cleaning_products images/cpimg";
import { MyContext } from './App';

function Cleaning_products()
{
    const {updatecart}= useContext(MyContext);
    return(
    <div className="vegetables">
        <Header/>
        <section className="vegetablessec">
        <section className="cardsproduct">
        <div className="row">
        {cp.map((cp, index) => (
        <div id={index} className="col-lg-3 col-md-4 col-sm-6 colelement cardbg">
          <div className="imgdiv">
            <img className="cardimgproduct" src={cp.src} alt="pic" />
          </div>
          <p className="cardtextproduct">{cp.name}</p>
          <div className="infodev">
              <>
              <button className="productaddtocart" onClick={() => {
                updatecart({
                    name: cp.name,
                    price: cp.price,
                    src: cp.src,
                    priceint:cp.priceint,
                    weight:cp.weight,
                    unit:"g",
                    type:"veg"
                    });

                $("#addtocart").addClass("animatecart");
                setTimeout(function()
                {
                $("#addtocart").removeClass("animatecart")
                },100)  
                }}>ADD</button>
              </>
            <h4 className="productprice">{cp.price}</h4>
          </div>
        </div>
        ))}
        </div>
        </section>
        </section>
    <div style={{backgroundColor:"rgba(180, 180, 180, 0.742)",paddingBottom:"30px",position:"relative",zIndex:"1"}}>
    <div className="row footerrow">  
      <i className="fa-brands fa-twitter ficon"></i>
      <i className="fa-brands fa-facebook-f ficon"></i>
      <i className="fa-brands fa-instagram ficon"></i>
      <i className="fa-solid fa-envelope ficon"></i>
    </div>
    <p style={{textAlign: "center",position:"relative",right:"15px",paddingLeft:"50px",paddingRight:"50px"}}>© Copyright 2023 GoGrocers || Created by <a href="https://github.com/VAbhijith2003github?tab=repositories" style={{color:"palevioletred"}}>Abhijith</a></p>
    </div>
    </div>
    );
}


export default Cleaning_products;
