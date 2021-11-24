import React from 'react'
import {Routes, Route} from 'react-router-dom';
import CreateOrders from './pages/CreateOrders';
import Home from './pages/Home/Home'

export default function PrivateRouting() {
    return (
        <>
            <Routes>
                <Route exact path="/home" element={<Home/>} />
                <Route path="/CreateOrders" element={<CreateOrders/>} />
            </Routes>
        
        </>
    )
}
