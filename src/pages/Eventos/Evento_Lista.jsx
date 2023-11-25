
// IMPORTANDO BIBLIOTECAS
import React from "react";
import axiosInstance from "../../axios/axiosInstance";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


import { Nav } from "react-bootstrap";


// IMPORTANDO ESTILO
import styles from "./styles.module.css";

// Icones
import icone_listas_evento from "../../assets/gerar_lista_evento.png"
import icone_listas_usuario from "../../assets/gerar_lista_usuario.png"
// Notificação
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Evento_Lista() {

    const GetDataEvento = async () => {
        await toast.promise(
            axiosInstance.get('/evento/listar_evento'), {
            pending: 'Enviando ....',
            success: 'Lista De Eventos Gerada !',
            error: 'Erro Lista De Eventos Não Gerada !'
        })
            .then((resposta) => {
                // console.log(resposta.data)
                // Criando o Arquivo com os dados do CSV 
                const file = new File([resposta.data], { type: 'text/csv' });

                // Cria uma URL Temporaria
                const url = URL.createObjectURL(file);

                // Cria um elemento de âncora (link) para o download
                const a = document.createElement('a');
                a.href = url;
                a.download = 'ListaEventos.csv'; // Nome do arquivo

                // Clica no link para iniciar o download
                a.click();

                // Libera o objeto URL quando não for mais necessário
                URL.revokeObjectURL(url)
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });
    }

    const GetDataParticipante = async () => {
        await toast.promise(
            axiosInstance.get('/evento/listar_participantes'), {
            pending: 'Enviando ....',
            success: 'Lista De Participantes Gerada !',
            error: 'Erro Lista De Participantes Não Gerada !'
        })
            .then((resposta) => {
                // Criando o Arquivo com os dados do CSV 
                const file = new File([resposta.data], { type: 'text/csv' });

                // Cria uma URL Temporaria
                const url = URL.createObjectURL(file);

                // Cria um elemento de âncora (link) para o download
                const a = document.createElement('a');
                a.href = url;
                a.download = 'ListaParticipante.csv'; // Nome do arquivo

                // Clica no link para iniciar o download
                a.click();

                // Libera o objeto URL quando não for mais necessário
                URL.revokeObjectURL(url)
            })
            .catch((error) => {
                console.error('ops! ocorreu um erro de requisição !', error);
            });


    }

    return (
        <Container className={` ${styles.caixa_lista}`}>
            <Row>
                <h2>Listas do Evento</h2>
            </Row>
            <Row>
                <ToastContainer></ToastContainer>

                <Col className={styles.caixa_secundaria} >
                    <Container className={styles.caixa_terciaria}>
                        <Nav className={styles.links} >
                            <img className={styles.card_img} src={icone_listas_evento} alt="Img Logo" />
                        </Nav>
                        <Button variant="outline-dark" onClick={GetDataEvento} className={`${styles.botao} `} size="lg">Gerar Lista dos Eventos</Button>
                    </Container>
                </Col>

                <Col className={styles.caixa_secundaria} >
                    <Container className={styles.caixa_terciaria}>
                        <Nav className={styles.links} >
                            <img className={styles.card_img} src={icone_listas_usuario} alt="Img Logo" />
                        </Nav>
                        <Button variant="outline-dark" onClick={GetDataParticipante} className={`${styles.botao} `} size="lg">Gerar Lista dos Participantes</Button>
                    </Container>
                </Col>
            </Row>

        </Container >

    )
}

export default Evento_Lista
