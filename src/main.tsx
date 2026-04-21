import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import App from './App.tsx';
import Business from './Business.tsx';
import Corporate from './Corporate.tsx';
import JoinPage from './JoinPage.tsx';
import { Toggle } from './Toggle.tsx';
import './index.css';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      {/* Toggle lives here — outside AnimatePresence, always mounted, never destroyed.
          This is what makes the pill animation fluid across page transitions. */}
      {location.pathname !== '/cadastro' && <Toggle />}
      <AnimatePresence mode="wait" initial={false}>
        {/* @ts-ignore */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<App />} />
          <Route path="/business" element={<Business />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/cadastro" element={<JoinPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>,
);
