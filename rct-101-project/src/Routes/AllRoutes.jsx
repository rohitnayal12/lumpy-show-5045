import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";

import DeliveryAndPayment from "../Pages/DeliveryandPayment"
import Catalouge from '../Pages/Catalouge';

const AllRoutes = () => {
    return (
        <Routes>
        <Route
          path="/"
          element={ <Home /> }
        />
        <Route path="/catalouge" element={<Catalouge />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deliveryandpayment" element={<DeliveryAndPayment />} />
       
        
       
      </Routes>
    )
}

export {AllRoutes}