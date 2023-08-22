import { Routes, Route } from "react-router-dom";

import Cabecalho from "./components/cabecalho/Index";
import BarraLateral from "./components/barraLateral/Index";

export default function Router() {
  return (
    <>
      <Cabecalho />
      <Routes>
        {/* Renderização da Pasta raiz */}
        <Route path="/" element={<BarraLateral />} />
      </Routes>
    </>
  );
}
