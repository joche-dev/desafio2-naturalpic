import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from './Context';
import Navbar from './componentes/Navbar';
import Home from './views/Home';
import Favoritos from './views/Favoritos';
import NotFound from './views/NotFound';


function App() {

  return (
    <>
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/desafio2-naturalpic/" element={<Home />} />
            <Route path="/desafio2-naturalpic/favoritos" element={<Favoritos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  );
}

export default App;
