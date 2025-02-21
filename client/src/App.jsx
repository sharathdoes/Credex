import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Creditcard from './pages/Creditcard'
import Inside from './pages/Inside'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/credit-user" element={<Creditcard/>} />
        <Route path="/inside" element={<Inside/>} />
      </Routes>
    </Router>
  )
}

export default App