// Importando Bibliotecas
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link as Scroll, Element } from 'react-scroll';

// Importando Estilo da Pagina
import styles from "./styles.module.css";

// Importando componentes
import Principal from "../../pages/Principal/Index";
import Eventos from "../../pages/Eventos/index";
import Login from "../../pages/Signin/Index";
import Eventos_Opcoes from "../../pages/Eventos/Evento_Principal"
import Evento_Registro from "../../pages/Eventos/Evento_Registro"

export default function BarraLateral() {
  return (
    <Container fluid>
      <Row>
        {/* Definindo o tamanho da Barra Lateral de acordo com as telas */}
        <Col sm={12} md={3} lg={3} className={`${styles.menu_lateral}`}>
          {/* Divisoria interna com estilo aplicado */}
          <div className={styles.caixa_interna}>
            {/* Funcionalidade de Scroll ao ser clicado direcionando as rotas. */}
            <Scroll to="Conteiner_Rotas" smooth={true} duration={150} >
              {/* Link com o Botão para a rota principal */}
              <Link to='/'> <Button variant="outline-light" size="lg">Home</Button> </Link>
            </Scroll>
            <Scroll to="Conteiner_Rotas" smooth={true} duration={150}>
              {/* Link com o Botão para a rota Eventos */}
              <Link to='/Eventos_Opcoes'> <Button variant="outline-light" size="lg">Eventos</Button> </Link>
            </Scroll>
            <Link to='/login'> <Button variant="outline-light" size="lg">Logar</Button> </Link>
            <Link to='/eventos'> <Button variant="outline-light" size="lg">Sobre</Button> </Link>
          </div>
        </Col>
        {/* Conjunto de rotas para os conteiners */}
        <Col sm={12} md={9} lg={9} className={`${'p-0'}`} >
          {/* Elemento necessaria para a indicação do Scroll */}
          <Element name="Conteiner_Rotas">
            {/* Conjunto de rotas para os seus conteiners */}
            <Routes>
              <Route path="/" element={<Principal />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Eventos_Opcoes" element={<Eventos_Opcoes/>} />
              <Route path="/Evento_Registro" element={<Evento_Registro/>} />
            </Routes>
          </Element>
        </Col>
      </Row>
    </Container>
  );
}
