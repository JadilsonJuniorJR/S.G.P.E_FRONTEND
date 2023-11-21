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
import { ErrorMessage } from "@hookform/error-message";

// IMPORTANDO ESTILO
import styles from "./styles.module.css";

// Notificação
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function FormularioSaida() {

    // Utilizando a biblioteca userForm
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // Utilizando navegações entre rotas
    const navigate = useNavigate()

    // Função para limpar campo de formulario
    const limparForm = (e) => {
        reset({
            nome_user: '',
            matricula: '',
        })
    }

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
                if(err.response.status === 409){
                    toast.error("Usuário Já realizou a confirmação",{autoClose: 2000,})
                }
            });
    }



    return (
        <Container>
            <Row>
                <Col sm={12} md={12} lg={12} className={` ${styles.caixa_secundaria_2}`}>
                    <ToastContainer pauseOnFocusLoss={false} ></ToastContainer>
                    <h2 className="mt-5 mb-5" >Formulário de Confirmação </h2>
                    <Container fluid className={` ${styles.caixa_interna} ${' p-4 bg-dark'}`}>
                        <Form onSubmit={handleSubmit(PutData)} className="overflow-hidden">

                            <Form.Group className="mb-3" controlId="nome_user">
                                <Form.Label>Nome: </Form.Label>
                                <Form.Control as='input' type="text" placeholder="Digite o seu nome:"
                                    {...register('nome_user')}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="matricula_user">
                                <Form.Label>Matrícula:</Form.Label>
                                <Form.Control as='input' type="number" placeholder="Digite a sua matrícula:" required
                                    {...register('matricula', { required: 'Preenchimento Obrigatorio !', maxLength: 10 })} />
                            </Form.Group>
                            <ErrorMessage
                                errors={errors}
                                name="matricula_user"

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

                </Col>
            </Row>

        </Container>

    )
}
