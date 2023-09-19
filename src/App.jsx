import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar/Navbar";
import Home from "./views/Home"
import Favoritos from "./views/Favoritos"
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
