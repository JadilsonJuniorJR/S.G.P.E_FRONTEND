import Cabecalho from "./components/cabecalho/Index";
import BarraLateral from "./components/BarraLateral/Index";
import Rodape from "./components/Rodape/Index";
import { Container } from "react-bootstrap";

// COMPONENTE DE REDERIZAÇÃO PRINCIPAL

function App() {
  return (
    <>
      {/* RENDERIZANDO O CABEÇALHO */}
      <Cabecalho />
      {/* RENDERIZANDO A BARRA LATERAL QUE ACOPLA O MENU PRINCIPAL */}
      <BarraLateral />

      {/* <Rodape /> */}
    </>
  );
}

export default App;
