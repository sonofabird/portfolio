import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Project1 from "./pages/Project1"

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Project1" element={<Project1/>}/>
        <Route path="/*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
