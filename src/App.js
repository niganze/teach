import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Wellcome from './pages/Wellcome'
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Wellcome/>}/>
    <Route path={"/login"}element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App