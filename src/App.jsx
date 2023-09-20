import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from './Context';
import Navbar from './componentes/Navbar';
import Home from './views/Home';
import Favoritos from './views/Favoritos';


function App() {

  return (
    <>
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  );
}

export default App;
