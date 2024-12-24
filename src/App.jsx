import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./app/Home";
import Shop from "./app/Shop";
import MyAccount from "./app/MyAccount";
import Product from "./app/Product";
import Cart from "./app/Cart";
import Checkout from "./app/Checkout";
import Login from "./app/Login";
import Register from "./app/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app/shop" element={<Shop />} />
          <Route path="/app/myaccount" element={<MyAccount />} />
          <Route path="/app/product" element={<Product />} />
          <Route path="/app/cart" element={<Cart />} />
          <Route path="/app/checkout" element={<Checkout />} />
          <Route path="/app/login" element={<Login />} />
          <Route path="/app/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
