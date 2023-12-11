import React from "react";
import "../../styles.css";
import Footer from "../elements/footer.jsx";
import Navbar from "../elements/navbar.jsx";
import Banner from "../elements/banner.jsx";
import Cards from "../elements/cards.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
