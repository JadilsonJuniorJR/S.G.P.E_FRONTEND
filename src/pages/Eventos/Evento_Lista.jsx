
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
            success: 'Cadastro Registrado',
            error: 'Cadastro não Registrado'
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
                // window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });
    }

    const GetDataParticipante = async () => {
        await toast.promise(
            axiosInstance.get('/evento/listar_participantes'), {
            pending: 'Enviando ....',
            success: 'Cadastro Registrado',
            error: 'Cadastro não Registrado'
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
        <Container className={` ${styles.conteiner}`}>
            <Row>
                <h2>Listas do Evento</h2>
            </Row>
            <Row className={styles.linha}>
                <ToastContainer></ToastContainer>
                <Container className={`${styles.caixa_terciaria_2}`}>
                    <section>
                        <Nav className="d-flex flex-column justify-content-center align-items-center" >
                            <img className={styles.card_img} src={icone_listas_evento} alt="Img Logo" />
                        </Nav>
                        <Button variant="outline-dark" onClick={GetDataEvento} className={`${styles.botao} `} size="lg">Gerar Lista dos Eventos</Button>
                    </section>
                    <section>
                        <Nav className="d-flex flex-column justify-content-center align-items-center" >
                            <img className={styles.card_img} src={icone_listas_usuario} alt="Img Logo" />
                        </Nav>
                        <Button variant="outline-dark" onClick={GetDataParticipante} className={`${styles.botao} `} size="lg">Gerar Lista dos Participantes</Button>
                    </section>
                </Container>
            </Row>

        </Container >

    )
}

export default Evento_Lista
