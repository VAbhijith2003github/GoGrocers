import React, { createContext, useState } from "react";
import $ from "jquery";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/home";
import Cart from "./components/pages/cart";
import Login from "./components/pages/login";
import Vegetables from "./components/pages/vegetables";
import Personalcare from "./components/pages/personal_care";
import Packagedfoods from "./components/pages/packaged_foods";
import Cleaningproducts from "./components/pages/cleaning_products";
import Fruits from "./components/pages/fruits";
import Staples from "./components/pages/staples";
import Page404 from "./components/pages/page404";
import Signup from "./components/pages/signup";
import DashBoard from "./components/pages/dashboard";
import ContactUs from "./components/pages/contactus";
import Addresses from "./components/pages/addresses";
import Loginprompt from "./components/pages/loginprompt";
import ComingSoon from "./components/pages/comingsoon";
import Profile from "./components/pages/profile";
import EditProfile from "./components/pages/editprofile";

export const MyContext = createContext();

const App = () => {
  const [cart, setcart] = useState([]);

  const updatecart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].frequency++;
      setcart(updatedCart);
    } else {
      var newItem = { ...item, frequency: 1 };
      setcart((cart) => [newItem, ...cart]);
    }
  };

  const hasAccessToken = !!localStorage.getItem("token");

  return (
    <div>
      <MyContext.Provider value={{ cart, setcart, updatecart }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/personalcare" element={<Personalcare />} />
            <Route path="/packagedfoods" element={<Packagedfoods />} />
            <Route path="/cleaningproducts" element={<Cleaningproducts />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/staples" element={<Staples />} />
            {hasAccessToken && (
              <>
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/profile/addresses" element={<Addresses/>} />
                <Route path="/profile/rewards" element={<ComingSoon/>} />
                <Route path="/profile/yourorders" element={<ComingSoon/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/profile/edit" element={<EditProfile/>} />
              </>
            )}
            {!hasAccessToken && (
              <>
                <Route path="/dashboard" element={<Loginprompt />} />
                <Route path="/contactus" element={<Loginprompt />} />
                <Route path="/profile/addresses" element={<Loginprompt/>} />
                <Route path="/profile/rewards" element={<Loginprompt/>} />
                <Route path="/profile/rewards" element={<Loginprompt/>} />
                <Route path="/profile" element={<Loginprompt/>} />
                <Route path="/profile/edit" element={<Loginprompt/>} />
              </>
            )}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </div>
  );
};

$(".veggiesbanner").attr("src", "./accfiles/GoGrocers banner.png");

export default App;
