import { Container, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo1A.png";
import styles from "./styles.module.css";


export default function Rodape() {
    return (
        <Container fluid className={` ${styles.footer} `}>
            <Row>
                <Col className={`${'d-flex flex-column justify-content-center align-items-center'} ${styles.h1_espaco}`}>
                    <h1> Sistema de Gerenciamento de Presença em Eventos </h1>
                    <span class="linhahorizontal"></span>
                </Col>
            </Row>

        </Container>

    );
}
