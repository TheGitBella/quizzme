import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, CadasterPage, Teste, GridBox } from '../../src/pages';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<CadasterPage />} />
        <Route path="/gridbox" element={<Teste />} />
        <Route path="/gridbox2" element={<GridBox />} />
      </Routes>
    </BrowserRouter>
  );
}

export { Rotas };
