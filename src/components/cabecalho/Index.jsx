import { Container, Navbar, Row, Col } from "react-bootstrap";
import logo from "../../assets/IFBVertical.png";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <Navbar className="bg-dark text-white">
      <Container fluid>
        <Row>
          <Col md={3} className={styles.cx_img}>
            <img className={styles.img} src={logo} alt="Img Logo" />
          </Col>
          <Col md={9} className="d-flex flex-column justify-content-center align-items-center">
            <h1> Sistema de Gerenciamento de Presença em Eventos </h1>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
