import React, { useContext } from 'react';
import "../../styles.css";
import $ from "jquery";
import Header from "../elements/header";
import staples from "../../images/staples images/stapleimg"
import { MyContext } from '../../App';

function Staples()
{
   
    const {updatecart}= useContext(MyContext);
    return(
    <div className="vegetables">
        <Header/>
        <section className="vegetablessec">
        <section className="cardsproduct">
        <div className="row">
        {staples.map((staples, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-sm-6 colelement cardbg">
          <div className="imgdiv">
            <img className="cardimgproduct" src={staples.src} alt="pic" />
          </div>
          <p className="cardtextproduct">{staples.name}</p>
          <div className="infodev">
          <button className="productaddtocart" onClick={() => {
            
            updatecart({
                name: staples.name,
                price: staples.price,
                src: staples.src,
                priceint:staples.priceint,
                weight:staples.weight,
                unit:staples.unit
                });
              
            $("#addtocart").addClass("animatecart");
            setTimeout(function()
            {
            $("#addtocart").removeClass("animatecart")
            },100)  
            }}>ADD</button>
            <h4 className="productprice">{staples.price}</h4>
          </div>
        </div>
        ))}
        </div>
        </section>
        </section>
    <div style={{backgroundColor:"rgb(201, 201, 201)",paddingBottom:"30px",position:"relative",zIndex:"1"}}>
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


export default Staples;