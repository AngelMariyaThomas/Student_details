
import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Details from './components/details/Details'
import Login from './components/login/Login'




function App() {
 
  return (
    <>
  <BrowserRouter>

    <Routes>
  
    <Route path="/"element={<Login/>}></Route>
      <Route path="/Details"element={<Details/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App