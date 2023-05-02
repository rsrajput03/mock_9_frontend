import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Stats from './Stat'

const AllRoutes = () => {
  return(
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/stats' element={<Stats/>}/>
    </Routes>
  )
}

export default AllRoutes