import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home'

export default function PrivateRouting() {
    return (
        <>
            <Routes>
          <Route exact path="/" element={<Home/>} />
          </Routes>
          </>
    )
}
