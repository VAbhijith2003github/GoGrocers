import React from 'react';
import "./components/styles.css"
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Banner from './components/ad.jsx';
import Cards  from './components/cards.jsx';

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