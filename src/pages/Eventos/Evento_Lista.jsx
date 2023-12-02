// IMPORTANDO BIBLIOTECAS
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


// IMPORTANDO ESTILO
import styles from "./styles.module.css";

// Icones
import icone_listas_evento from "../../assets/gerar_lista_evento.png"
import icone_listas_usuario from "../../assets/gerar_lista_usuario.png"


function Evento_Lista() {

    return (
        <Container className={` ${styles.caixa_lista}`}>
            <Row>
                <h2>Listas do Evento</h2>
            </Row>
            <Row>

                <Col className={styles.caixa_secundaria} >
                    <Container className={styles.caixa_terciaria}>
                        <Link to='/inicio/evento_lista_evento' className={styles.links}>
                            <img className={styles.card_img} src={icone_listas_evento} alt="Img Logo" />
                        </Link>
                        <Link to='/inicio/evento_lista_evento'>
                            <Button variant="outline-dark" className={`${styles.botao} `} size="lg">Gerar Lista dos Eventos</Button>
                        </Link>
                    </Container>
                </Col>


                <Col className={styles.caixa_secundaria} >
                    <Container className={styles.caixa_terciaria}>

                        <Link to='/inicio/evento_lista_pesquisa' className={styles.links}>
                            <img className={styles.card_img} src={icone_listas_usuario} alt="Img Logo" />
                        </Link>

                        <Link to='/inicio/evento_lista_pesquisa'>
                            <Button variant="outline-dark" className={`${styles.botao} `} size="lg">Gerar Lista dos Participantes</Button>
                        </Link>
                    </Container>
                </Col>
            </Row>
        </Container >
    )
}

export default Evento_Lista
