import React from 'react'
import {Routes, Route} from 'react-router-dom';
import CreateOrders from './pages/CreateOrders';
import SavedOrders from "./pages/SavedOrders";
import ActiveOrders from "./pages/ActiveOrders";
import PreviousOrders from "./pages/PreviousOrders";
import Home from './pages/Home/Home'

export default function PrivateRouting() {
    return (
        <>
            <Routes>
                <Route exact path="/home" element={<Home/>} />
                <Route path="/AdminDashboard/CreateOrders" element={<CreateOrders/>} />
                <Route path="/AdminDashboard/SavedOrders" element={<SavedOrders/>} />
                <Route path="/AdminDashboard/ActiveOrders" element={<ActiveOrders/>} />
                <Route path="/AdminDashboard/PreviousOrders" element={<PreviousOrders/>} />
            </Routes>
        
        </>
    )
}
