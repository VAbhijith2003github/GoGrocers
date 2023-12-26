import React, { createContext, useState } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/pages/home"
import Cart from "./components/pages/cart";
import Login from "./components/pages/login"
import Vegetables from './components/pages/vegetables';
import Personalcare from "./components/pages/personal_care";
import Packagedfoods from "./components/pages/packaged_foods";
import Cleaningproducts from "./components/pages/cleaning_products";
import Fruits from "./components/pages/fruits";
import Staples from "./components/pages/staples";
import Page404 from "./components/pages/page404";
import Signup  from "./components/pages/signup";
import DashBoard from './components/pages/dashboard';

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
    <Route exact path="/dashboard" element ={<DashBoard/>}/>
    <Route exact path="*" element ={<Page404/>}/>
    </Routes>
    </Router>
    </MyContext.Provider>
    </div>
  );
}

$(".veggiesbanner").attr('src','./accfiles/GoGrocers banner.png');

export default App;
