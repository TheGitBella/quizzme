import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, CadasterPage } from '../../src/pages';
import { Layout } from '../../src/pages/design';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<CadasterPage />} />
        <Route path="/design/layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export { Rotas };
