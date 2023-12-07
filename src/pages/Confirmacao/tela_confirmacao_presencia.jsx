// IMPORTANDO BIBLIOTECAS
import React from "react";
import { Container, Row } from "react-bootstrap";

// IMPORTANDO ESTILO
import styles from "./styles.module.css";

import icone_confirmado from '../../assets/sinal-de-visto.png'

function tela_confirmacao_presencia() {

    return (
        <Container className={` ${styles.caixa_lista} rounded `}>
            <Row>
                <Container className={`${styles.caixa_terciaria} rounded shadow`}>
                    
                    <h2>Presença Confirmada</h2>
                    <img className={styles.card_img} src={icone_confirmado} alt="Img Logo" />
                </Container>
            </Row>
        </Container >
    )
}

export default tela_confirmacao_presencia