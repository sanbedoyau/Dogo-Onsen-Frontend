import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.tsx'
import { BathServices_Home } from './components/BathServices/BathService.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <main className='main'>
      <BathServices_Home/>
    </main>
  </StrictMode>,
)
