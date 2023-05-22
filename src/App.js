import React, { createContext, useState } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./home"
import Cart from "./cart";
import Login from "./login"
import Vegetables from './vegetables';
import Personalcare from "./personal_care";
import Packagedfoods from "./packaged_foods";
import Cleaningproducts from "./cleaning_products";
import Fruits from "./fruits";
import Staples from "./staples";
import Page404 from "./page404";
import Signup  from "./signup";

export const MyContext = createContext();

const App=()=> {

  const [cart,setcart] = useState([]);
  
  const updatecart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    if (existingItemIndex >= 0) {
      const updatedcart = [...cart];
      updatedcart[existingItemIndex].frequency++;
      setcart(updatedcart);
    } else {
      var newItem = { ...item, frequency: 1};
      setcart((cart) => [newItem, ...cart]);
    }
  };
  return (
    <div>
    <MyContext.Provider value={{cart,setcart,updatecart}}>
    <Router>
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/login' element ={<Login/>} />
    <Route exact path='/signup' element ={<Signup/>}/>
    <Route exact path='/vegetables' element ={<Vegetables/>} />
    <Route exact path='/cart' element={<Cart/>} />
    <Route exact path='/personalcare' element ={<Personalcare/>} />
    <Route exact path='/packagedfoods' element ={<Packagedfoods/>} />
    <Route exact path='/cleaningproducts' element ={<Cleaningproducts/>} />
    <Route exact path='/fruits' element ={<Fruits/>} />
    <Route exact path='/staples' element ={<Staples/>} />
    <Route exact path="*" element ={<Page404/>}/>
    <Route exact path="/gogrocers" element ={<Home/>}/>
    </Routes>
    </Router>
    </MyContext.Provider>
    </div>
  );
}

$(".veggiesbanner").attr('src','./accfiles/GoGrocers banner.png');

export default App;
