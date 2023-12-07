// IMPORTANDO BIBLIOTECAS
import React from "react";
import { Container, Row } from "react-bootstrap";

// IMPORTANDO ESTILO
import styles from "./estilo.module.css";

import icone_confirmado from '../../assets/sinal-de-visto.png'

function tela_confirmacao() {

    return (
        <Container className={` ${styles.caixa_lista} rounded `}>
            <Row>
                <Container className={`${styles.caixa_terciaria} `}>
                    
                    <h2>Presença Confirmada</h2>
                    <img className={styles.card_img} src={icone_confirmado} alt="Img Logo" />
                </Container>
            </Row>
        </Container >
    )
}

export default tela_confirmacao