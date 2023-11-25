// IMPORTANDO BIBLIOTECAS
import React from "react";
import axiosInstance from "../../axios/axiosInstance";
import { Container, Row, Col } from "react-bootstrap";

// IMPORTANDO ELEMENTOS 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// IMPORTANDO ESTILO
import styles from "./styles.module.css";

// Notificação
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Evento_Lista_Pesquisar() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // Função para Enviar a Requisição
    const GetDataEvento = async (dados) => {
        await toast.promise(
            axiosInstance.get('/evento/listar_evento',{dados}), {
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

    return (
        <Container className={styles.caixa_qrcode_2}>
            <Row>
                <Container className={styles.caixa_titulo}>
                    <h2>Gerar Lista Participante</h2>
                </Container>
            </Row>
            <Row>
                <Col className={styles.caixa_secundaria_2}>
                    <ToastContainer></ToastContainer>
                    <Container className={styles.caixa_terciaria_2} >
                        <Container className={`${styles.caixa_form} ${' bg-dark'}`}>
                            <Form onSubmit={handleSubmit(GetDataEvento)}>

                                <Form.Group className="mb-3" controlId="id_evento">
                                    <Form.Label>ID do Evento:</Form.Label>
                                    <Form.Control as='input' type="number" placeholder="Digite o ID do evento:" required
                                        {...register('id_evento')} />
                                </Form.Group>
                                <ErrorMessage errors={errors} name="id_evento" />

                                <div className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Participante *****"
                                        name="opcao"
                                        type='radio'
                                        id='opcao_1'
                                    />
                                    <Form.Check
                                        inline
                                        label="Partipante Geral"
                                        name="opcao"
                                        type='radio'
                                        id='opcao_2'
                                    />
                                </div>

                                <Button variant="danger" type="submit" className="me-2" > Enviar </Button>
                                <Button variant="primary" type="button" onClick={() => reset()}> Limpar </Button>
                            </Form>
                        </Container>
                    </Container>
                </Col>

            </Row>
        </Container >
    )
}
