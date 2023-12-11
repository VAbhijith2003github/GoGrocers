import React from 'react';
import "../../styles.css"
import Footer from "../elements/footer.jsx"
import Header from '../elements/header.jsx';
import Banner from '../elements/ad.jsx';
import Cards  from '../elements/cards.jsx';

function Home()
{
    return(
      <div>
        <Header/>
        <hr className='line1'></hr>
        <hr className='line2'></hr>
        <Banner/>
       <Cards/>
       <Footer/>
       </div>
       
    );
}

export default Home;