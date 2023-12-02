// IMPORTANDO BIBLIOTECAS
import React from "react";
import axiosInstance from "../../axios/axiosInstance";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';

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

import axios from "axios";

export default function QrcodeSaida() {

    // Utilizando a biblioteca userForm
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [qrcode, setQRCode] = useState('');

    // Função para Enviar a Requisição
    const PostDados = async (dados) => {
        dados.opc = 2
        await toast.promise(
            axiosInstance.post(`/qrcode/gerar`, { dados }),
            {
                pending: 'Enviando Requisição ....',
                success: 'Qrcode Gerado!',
                error: 'Requisição não concluida!'
            }

        ).then(response => {
            // Armazenando os dados vindo do SERVER
            setQRCode(response.data)
            const dataURL = response.data; // Supondo que a resposta contenha o data URL da imagem
            const savePath = './'; // Caminho para salvar a imagem localmente
            // Função para fazer o download e salvar a imagem
            const BaixarIMG = (url, path) => {
                axios.get(url, { responseType: 'arraybuffer' })
                    .then((response) => {
                        const blob = new Blob([response.data], { type: 'image/png' });
                        const url = window.URL.createObjectURL(blob);

                        // Cria um link temporário e faz o download do arquivo
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = 'qrcode_saida.png'; // Nome do arquivo para download
                        document.body.appendChild(link);
                        link.click();

                        // Limpa o objeto URL após o download
                        window.URL.revokeObjectURL(url);
                    })
                    .catch((error) => {
                        console.error('Erro ao obter o data URL da imagem:', error);
                    });
            }
            // Chamar a função para fazer o download e salvar a imagem
            BaixarIMG(dataURL, savePath);
        })
            .catch((err) => {
                console.error("ops! ocorreu um erro na requisição" + err);
            });
    }

    return (
        <Container className={styles.caixa_qrcode_2}>
            <Row>
                <Container className={styles.caixa_titulo}>
                    <h2>Gerar QRCODE Saída</h2>
                </Container>
            </Row>
            <Row>
                <Col className={styles.caixa_secundaria_2}>
                    <ToastContainer pauseOnFocusLoss={false} ></ToastContainer>
                    <Container className={styles.caixa_terciaria_2} >
                        <Container className={`${styles.caixa_form} ${' bg-dark rounded'}`}>
                            <Form onSubmit={handleSubmit(PostDados)}>

                                <Form.Group className="mb-3" controlId="id_evento">
                                    <Form.Label>ID do Evento:</Form.Label>
                                    <Form.Control as='input' type="number" placeholder="Digite o ID do evento:" required
                                        {...register('id_evento')} />
                                </Form.Group>
                                <ErrorMessage errors={errors} name="id_evento" />

                                <Button variant="danger" type="submit" className="me-2" > Enviar </Button>
                                <Button variant="primary" type="button" onClick={() => reset()}> Limpar </Button>
                            </Form>
                        </Container>
                    </Container>
                </Col>
                <Col className={styles.caixa_secundaria_2}>
                    <Container className={styles.caixa_terciaria_3} >
                        <Col>
                            <div className={styles.caixa_titulo_2}>
                                <h3>QRCODE</h3>
                            </div>

                        </Col>
                        <Col>
                            <Container className={`${styles.caixa_terciaria_4} ${'rounded'}`} >
                                {
                                    <>
                                        {qrcode && <img src={qrcode} className={styles.qr_img} alt="QR Code" />}
                                    </>
                                }
                            </Container>
                        </Col>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
