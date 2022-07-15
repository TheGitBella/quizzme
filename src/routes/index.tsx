import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, CadasterPage, Teste } from '../../src/pages';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<CadasterPage />} />
        <Route path="/gridbox" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}

export { Rotas };
