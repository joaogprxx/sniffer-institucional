import {StrictMode, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import App from './App.tsx';
import Business from './Business.tsx';
import Corporate from './Corporate.tsx';
import JoinPage from './JoinPage.tsx';
import Xodos from './Xodos.tsx';
import Matilha from './Matilha.tsx';
import Spotlight from './Spotlight.tsx';
import Faro from './Faro.tsx';
import Uivo from './Uivo.tsx';
import { Toggle } from './Toggle.tsx';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      {/* Toggle lives here — outside AnimatePresence, always mounted, never destroyed.
          This is what makes the pill animation fluid across page transitions. */}
      {location.pathname !== '/cadastro' && <Toggle />}
      <AnimatePresence mode="wait" initial={false}>
        {/* @ts-ignore */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/people" replace />} />
          <Route path="/people" element={<App />} />
          <Route path="/business" element={<Business />} />
          <Route path="/business/xodos" element={<Xodos />} />
          <Route path="/business/matilha" element={<Matilha />} />
          <Route path="/business/spotlight" element={<Spotlight />} />
          <Route path="/business/faro" element={<Faro />} />
          <Route path="/business/uivo" element={<Uivo />} />
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
