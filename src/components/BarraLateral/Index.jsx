// Importando Bibliotecas
import {Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link as Scroll, Element } from 'react-scroll';

// Importando Estilo da Pagina
import styles from "./styles.module.css";

// IMPORTANDO O CONJUNTO DE ROTAS
import { Outlet } from "react-router-dom";



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
              <Link to='/inicio'> <Button variant="outline-light" className={`${styles.botao}`}  size="lg">Home</Button> </Link>
            </Scroll>
            <Scroll to="Conteiner_Rotas" smooth={true} duration={150}>
              {/* Link com o Botão para a rota Eventos */}
              <Link to='/inicio/Eventos_Opcoes'> <Button variant="outline-light" className={`${styles.botao}`} size="lg">Eventos</Button> </Link>
            </Scroll>
            <Link to='/'> <Button variant="outline-light" className={`${styles.botao}`} size="lg">Deslogar</Button> </Link>
            <Link to='/inicio/sobre'> <Button variant="outline-light" className={`${styles.botao}`} size="lg">Sobre</Button> </Link>
          </div>
        </Col>
        {/* SEGUNDA COLUNA DA BARRA LATERAL, LOCAL ONDE É RENDERIZADO OS COMPONENTES */}
        <Col sm={12} md={9} lg={9} className={`${styles.caixa_principal}`} >
          {/* Elemento necessaria para a indicação do Scroll(Decer suavimente para o componente selecionado) */}
          <Element name="Conteiner_Rotas">
            {/* Local onde é renderizado as rotas indicadas em INDEX.js */}
            <Outlet />
          </Element>
        </Col>
      </Row>
    </Container>
  );
}
