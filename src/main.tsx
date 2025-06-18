import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Navbar from './components/Navbar/Navbar.tsx';
import { BathServices_Home } from './components/BathServices/BathService.tsx';
import Menu from './components/Menu/Menu.tsx'; // 👈 importa el menú

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<BathServices_Home />} />
          <Route path="/menu" element={<Menu />} />
          {/* Agrega más rutas aquí si quieres */}
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>
);
