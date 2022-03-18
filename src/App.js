import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Training from './components/Training';
import Access from './components/Access';
import Software from './components/Software';

function App() {
  return (
    <BrowserRouter>
        <Routes> 
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/training" element={<Training />} />
            <Route path="/access" element={<Access />} />
            <Route path="/software" element={<Software />} />
            <Route path="*" element={<div>Página no encontrada</div>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
