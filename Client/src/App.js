
import React, { useState } from "react";
// import Login_Form from "./components/login_form";
import "./App.css"
import Home from './page/Home'
import Contact from './page/Contact'
import Product from './page/Product'
import AddProduct from "./components/Home/Dashboard/AddNew/addproduct";
import Edit_Product from "./components/Home/Dashboard/Edit_Product/edit-product"


import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";
import ProductListing from "./page/ProductListing";
import CartPage from "./page/cart";
import Dashboard from "./page/dashboard";
import { store } from './store'
import { Provider } from 'react-redux'
import { toast ,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login_form from "./components/login-form/login-form"
import SignUp from "./page/SignUp"

let App = (props) => {

     let Token = localStorage.getItem("token")
  return (
    <div className="container">
       <Provider store={store}>
       <ToastContainer  autoClose={1500} />
            <Routes >        
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/product" element={<Product/>}/>
              <Route path="/product/:id" element={<ProductListing/>}/>
              <Route path="/product/cart" element={<CartPage/>}/>
              <Route  path="/dashboard" element={
                Token  ? <Dashboard/> : <Login_form />             
              }/>
              <Route path="/login" element={<Login_form />}/>
              <Route path="/dashboard/add" element={<AddProduct/>}/>
              <Route path="/dashboard/edit/:id" element={<Edit_Product/>}/>
              <Route path="/signup" element={<SignUp/>}/>
          </Routes>
       </Provider>

        
    </div>


   
  );
}

export default App;
