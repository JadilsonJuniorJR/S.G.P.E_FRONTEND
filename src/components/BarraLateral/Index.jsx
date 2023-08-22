import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";

import Principal from "../../pages/Principal/Index";
import Eventos from "../../pages/Eventos/Index";

export default function BarraLateral() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={3} lg={3} className={styles.flutuar}>
          <div className={styles.menu_lateral}>
            <div className={styles.menu_lateral_caixa}>
              <button type="button" class="btn btn-light">
                Home
              </button>
            </div>
            <button type="button" class="btn btn-light">
              Eventos
            </button>
          </div>
          {/* Conteúdo da coluna */}
        </Col>

        <Col sm={12} md={9} lg={6}>
          <Routes>
            {/* Renderização da Pasta raiz */}
            <Route path="/" element={<Principal />} />
            <Route path="/eventos" element={<Eventos />} />
            {/* <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} /> */}
          </Routes>
          {/* Conteúdo da coluna */}
        </Col>
      </Row>
    </Container>
  );
}
