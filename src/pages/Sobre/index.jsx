// IMPORTANDO BIBLIOTECAS
import React from "react";
import { Container, Row } from "react-bootstrap";

// IMPORTANDO ESTILO
import styles from "./styles.module.css";

function Sobre_inicial() {

    return (
        <Container className={` ${styles.caixa_lista}`}>
            <Row>
                <h2>Sobre</h2>
            </Row>
            <Row>
                <Container className={styles.caixa_terciaria}>
                    <p>
                        O Sistema de Gerenciamento de Presença em Eventos (SGPE) é uma aplicação web desenvolvida para facilitar a criação e administração de presenças em eventos.
                        Características do Sistema:
                    </p>

                    <span>
                        <ul>
                            <li>Criação de eventos </li>
                            <li>Gerador de QR Codes para entrada e saída </li>
                            <li>Gerenciamento dos eventos criados</li>
                            <li> Geração de arquivos com listas de eventos criados e participantes </li>
                            <li>Confirmação da presença do participante, considerando horários de entrada e saída, bem como a tolerância definida pelo organizador para a participação no evento.</li>
                        </ul>
                    </span>

                    <p>
                        O sistema foi desenvolvido como Trabalho de Conclusão de Curso (TCC) por Jadilson Nascimento da Cruz Junior e Leandro Junio de Sousa Gomes,
                        durante a graduação em Tecnologia em Sistemas de Internet no Instituto Federal de Brasília, Campus Brasília. O projeto foi orientado pelo professor Me. Fernando Wagner Brito Hortencio Filho.
                    </p>

                </Container>
            </Row>
        </Container >
    )
}

export default Sobre_inicial