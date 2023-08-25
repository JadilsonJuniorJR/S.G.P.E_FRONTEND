import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import styles from "./styles.module.css";

import Principal from "../../pages/Principal/Index";
import Eventos from "../../pages/Eventos/index";
import Login from "../../pages/Signin/Index"

export default function BarraLateral() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={3} lg={3} className={`${styles.menu_lateral} ${'bg-dark'}`}>
          <div className={styles.caixa_interna}>
            <Link to='/'> <Button variant="outline-light" size="lg">Home</Button> </Link>
            <Link to='/eventos'> <Button variant="outline-light" size="lg">Eventos</Button> </Link>
            <Link to='/login'> <Button variant="outline-light" size="lg">Logar</Button> </Link>
            <Link to='/eventos'> <Button variant="outline-light" size="lg">Sobre</Button> </Link>
          </div>
        </Col>

        <Col sm={12} md={9} lg={9} className="p-0">
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}
