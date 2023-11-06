
// IMPORTANDO BIBLIOTECAS
import React from "react";
import axiosInstance from "../../axios/axiosInstance";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import logo from "../../assets/icone_evento.png"

// IMPORTANDO ESTILO
import styles from "./styles.module.css";

// Notificação
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Evento_Arquivar() {

    const GetData = () => {
        axiosInstance.get('/evento/arquivar_evento')
            .then((resposta) => {
                console.log(resposta.data)

            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });
    }

    return (
        <Container className={` ${styles.conteiner}`}>
            <Row>
                <h2>Arquivar eventos</h2>
            </Row>
            <Row className={styles.linha}>
                <ToastContainer></ToastContainer>
                <Container className={`${styles.caixa_terciaria}`}>

                    {/* Icone com Link */}
                    <Nav.Link as={Link} to="/inicio/evento_arquivar" className="d-flex flex-column justify-content-center align-items-center" >
                        <img className={styles.card_img} src={logo} alt="Img Logo" />
                    </Nav.Link>
                    {/* Botão para Evento  */}
                    <Link to='/inicio/evento_arquivar'>
                    <Button variant="outline-dark" onClick={GetData} className={`${styles.botao} `} size="lg">Gerar Backup dos Eventos</Button>
                    </Link>

                </Container>
                <Container>
                    <Button variant="outline-dark" onClick={GetData} className={`${styles.botao} `} size="lg"> Gerar CSV </Button>
                </Container>
            </Row>

        </Container >

    )
}

export default Evento_Arquivar
