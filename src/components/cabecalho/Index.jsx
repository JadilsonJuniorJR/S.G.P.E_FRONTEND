import { Container, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo1A.png";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <Navbar className={`${styles.menu_cabecalho}`}>
      <Container fluid>
        <Row>
          <Col md={4} lg={4}>
            <Navbar.Brand as={Link} to="/" className="d-flex flex-column justify-content-center align-items-center">
              <img className={styles.img} src={logo} alt="Icone de eventos" />
            </Navbar.Brand>
          </Col>
          <Col md={8} lg={8} className={`${'d-flex flex-column justify-content-center align-items-center'} ${styles.h1_espaco}`}>
            <h1> Sistema de Gerenciamento de Presença em Eventos </h1>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
