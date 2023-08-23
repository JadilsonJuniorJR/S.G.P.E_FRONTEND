import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import styles from "./styles.module.css";

import Principal from "../../pages/Principal/Index";
import Eventos from "../../pages/Eventos/Index";

export default function BarraLateral() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={3} lg={3} className={`${styles.menu_lateral} ${'bg-dark'}`}>
          <div className={styles.caixa_interna}>
            <Button variant="outline-light" size="lg">Home</Button>
            <Button variant="outline-light" size="lg">Eventos</Button>
            <Button variant="outline-light" size="lg">Sobre</Button>
          </div>
        </Col>

        <Col sm={12} md={9} lg={9}>
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/eventos" element={<Eventos />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}
