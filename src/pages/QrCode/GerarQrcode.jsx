// IMPORTANDO BIBLIOTECAS
import React from "react";
import axiosInstance from "../../axios/axiosInstance";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';
// IMPORTANDO ROTAS
import { useNavigate } from "react-router-dom";

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



export default function GerarQrcode() {

    // Utilizando a biblioteca userForm
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // Utilizando navegações entre rotas
    const navigate = useNavigate()

    const [qrcode, setQRCode] = useState('');

    // Função para limpar campo de formulario
    const limparForm = (e) => {
        reset({
            nome_user: '',
            matricula: '',
        })
    }

    const PostDados = async (dados) => {
        console.log(dados)
        await toast.promise(
            axiosInstance.post(`/qrcode/gerar`, { dados }),
            {
                pending: 'Enviando Requisição ....',
                success: 'Qrcode Gerado!',
                error: 'Requisição não concluida!'
            }

        ).then(response => {
            console.log(response)
            console.log(response.data)
            setQRCode(response.data)
            console.log(response.status + " Requisição concluida")
            console.log(qrcode)
            // notify()
            // setTimeout(() => { return navigate("/inicio") }, 40000)
        })
            .catch((err) => {
                console.error("ops! ocorreu um erro na requisição" + err);
            });
    }


    return (
        <Container className={` ${styles.caixa_primaria}`}>
            <Row className={` ${styles.linha_1}`}>
                <Container className={` ${styles.caixa_secundaria}`}>
                    <h2>Criar QRCODE</h2>
                </Container>
            </Row>
            <Row className={` ${styles.linha_1}`}>
                <Col className={` ${styles.coluna_1}`}>
                    <ToastContainer></ToastContainer>
                    <Container className={` ${styles.caixa_terciaria}`} >
                        <Container sm={12} md={8} lg={8} className={`${styles.caixa_interna} ${' p-4 bg-dark'}`}>
                            <Form onSubmit={handleSubmit(PostDados)} className="overflow-hidden">

                                <Form.Group className="mb-3" controlId="nome_evento">
                                    <Form.Label>Nome do Evento: </Form.Label>
                                    <Form.Control as='input' type="text" placeholder="Digite o nome do Evento:"
                                        {...register('nome_evento')}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="id_evento">
                                    <Form.Label>ID do Evento:</Form.Label>
                                    <Form.Control as='input' type="number" placeholder="Digite o ID do evento:" required
                                        {...register('id_evento', { required: 'Preenchimento Obrigatorio !', maxLength: 10 })} />
                                </Form.Group>
                                <ErrorMessage
                                    errors={errors}
                                    name="id_evento"

                                />

                                <Button variant="danger" type="submit" className="me-2" >
                                    Enviar
                                </Button>
                                <Button variant="primary" type="button"
                                    onClick={limparForm} >
                                    Limpar
                                </Button>
                            </Form>
                        </Container>
                    </Container>
                </Col>
                <Col className={` ${styles.coluna_1}`}>
                    <Container className={` ${styles.caixa_terciaria}`} >
                        <Col >
                            <h3>QRCODE</h3>
                            <div className={` ${styles.painel_qrcode}`}>
                                {
                                    <>
                                        {qrcode && <img src={qrcode} alt="QR Code" />}
                                    </>
                                }
                            </div>
                        </Col>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
