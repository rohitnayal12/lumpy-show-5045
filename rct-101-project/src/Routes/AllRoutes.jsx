import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import AllProducts from "../Pages/Products";
import Privateroute from "./PrivateRoute";
import Login from "../Pages/Login";

const AllRoutes = () => {
    return (
        <Routes>
        <Route
          path="/"
          element={ <Home /> }
        />
        <Route path="/catalouge" element={<Catalouge />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<DeleveryandPayment />} />
       
        
       
      </Routes>
    )
}

export {AllRoutes}