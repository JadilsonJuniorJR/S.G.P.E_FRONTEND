// IMPORTANDO BIBLIOTECAS
import React from "react";
import axiosInstance from "../../axios/axiosInstance";
import { Container, Row, Col } from "react-bootstrap";

// IMPORTANDO ROTAS
import { useNavigate } from "react-router-dom";

// IMPORTANDO ELEMENTOS 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

// IMPORTANDO ESTILO
import styles from "./styles.module.css";

// Notificação
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function FormularioSaida() {

    // Utilizando a biblioteca userForm
    const { register, handleSubmit, reset } = useForm();

    // Utilizando navegações entre rotas
    const navigate = useNavigate()

    const PutData = async (dados) => {
        await toast.promise(
            axiosInstance.put(`/participante/confirmar/${dados.nome_user}/${dados.matricula}`),
            {
                pending: 'Enviando ....',
                success: 'Participante registrado !',
                error: 'Participante não registrado no sistema !'
            }

        ).then(response => {
            console.log(response)
            console.log(response.status + " Usuario enviado")
            // notify()
            setTimeout(() => { return navigate("/inicio") }, 2000)
        })
            .catch((err) => {
                console.error("ops! ocorreu um erro na requisição" + err);
                if (err.response.status === 409) {
                    toast.error("Usuário Já realizou a confirmação", { autoClose: 2000, })
                }
            });
    }


    return (
        <Container className={` ${styles.formulario_confirmacao}`}>
            <Row>
                <h2>Formulário de Confirmação </h2>
            </Row>
            <Row>
                <Col className={` ${styles.caixa_secundaria_2}`}>
                    <ToastContainer pauseOnFocusLoss={false} ></ToastContainer>
                    <Container fluid className={` ${styles.caixa_interna_2} ${' p-4 bg-dark rounded'}`}>
                        <Form onSubmit={handleSubmit(PutData)} className="overflow-hidden">
                            <Row>
                                <Form.Group className="mb-3" controlId="nome_user">
                                    <Form.Label>Nome: </Form.Label>
                                    <Form.Control as='input' type="text" placeholder="Digite o seu nome:"
                                        {...register('nome_user')} />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3" controlId="matricula_user">
                                    <Form.Label>Matrícula:</Form.Label>
                                    <Form.Control as='input' type="number" placeholder="Digite a matrícula:" required
                                        {...register('matricula')} />
                                </Form.Group>
                            </Row>

                            <Button variant="danger" type="submit" className="me-2" > Enviar </Button>
                            <Button variant="primary" type="button" onClick={() => reset()}> Limpar </Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
