import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import Detailpage from './pages/Detailpage'
function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/details' element={<Detailpage/>}/>
    </Routes>
  )
}

export default MainRoutes