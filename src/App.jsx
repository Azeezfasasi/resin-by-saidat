import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./app/Home";
import Shop from "./app/Shop";
import MyAccount from './app/MyAccount';
import Product from "./app/Product";
import Cart from "./app/Cart";
import Checkout from "./app/Checkout";
import Login from "./app/Login";
import Register from "./app/Register";
import Order from "./app/Order";
import BillingAddress from "./app/BillingAddress";
import Message from "./app/Message";
import Settings from "./app/Settings";
import TrackOders from "./app/TrackOders";
import AddProduct from "./app/AddProduct";
import ManageProducts from "./app/ManageProducts";
import AccountDetails from "./app/AccountDetails";
import EditProduct from "./app/EditProduct";
import ProductSingle from "./app/ProductSingle";
import ScrollToTop from "./assets/components/home-components/ScrollToTop";
import ProtectedRoute from "./assets/components/account-components/ProtectedRoute";
import ResinRegistrationForm from "./app/ResinRegistrationForm";

function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app/shop" element={<Shop />} />
          <Route path="/app/myaccount" element={<MyAccount />} />
          <Route path="/app/product" element={<ProtectedRoute><Product /></ProtectedRoute>} />
          <Route path="/app/cart" element={<Cart />} />
          <Route path="/app/checkout" element={<Checkout />} />
          <Route path="/app/login" element={<Login />} />
          <Route path="/app/register" element={<Register />} />
          <Route path="/app/order" element={<ProtectedRoute><Order /></ProtectedRoute>} />
          <Route path="/app/billingaddress" element={<ProtectedRoute><BillingAddress /></ProtectedRoute>} />
          <Route path="/app/message" element={<ProtectedRoute><Message /></ProtectedRoute>} />
          <Route path="/app/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path="/app/trackorders" element={<TrackOders />} />
          <Route path="/app/addproduct" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
          <Route path="/app/manageproduct" element={<ProtectedRoute><ManageProducts /></ProtectedRoute>} />
          <Route path="/app/accountdetails" element={<ProtectedRoute><AccountDetails /></ProtectedRoute>} />
          <Route path="/app/editproduct/:id" element={<ProtectedRoute><EditProduct /></ProtectedRoute>} />
          <Route path="/app/product/:id" element={<ProductSingle />} />
          <Route
            path="/myaccount"
            element={
              <ProtectedRoute>
                <MyAccount />
              </ProtectedRoute>
            }
          />
          <Route path="/app/resinregistrationform" element={<ResinRegistrationForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
