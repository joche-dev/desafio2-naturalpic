import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar/Navbar";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
    </>
  )
}

export default App
