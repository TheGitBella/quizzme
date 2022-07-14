import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, CadasterPage } from '../../src/pages';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<CadasterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { Rotas };
