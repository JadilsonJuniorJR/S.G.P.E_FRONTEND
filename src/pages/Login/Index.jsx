
// IMPORTANDO ELEMENTOS 
import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css'
import axiosInstance from "../../axios/axiosInstance";

// IMPORTANDO ELEMENTOS 
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// Notificação
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {

    // Utilizando a biblioteca userForm
    const { register, handleSubmit, reset } = useForm();

    const navigate = useNavigate()
    const postData = async (dados) => {

        await toast.promise(
            axiosInstance.post('/login', { dados }), {
            pending: 'Enviando ....',
            success: 'Sucesso',
            error: 'Login não efetuado !'
        }).then(response => {
            console.log(response.status + " Evento enviado")
            return navigate("/inicio")
        })
            .catch((err) => {
                console.error("ops! ocorreu um erro de requisição " + err);
            });
    }

    return (

        <Container className={styles.caixa_login}>
            <Row>
                <Container className={`${styles.caixa}`}  >
                    <ToastContainer pauseOnFocusLoss={false}> </ToastContainer>
                    <Form onSubmit={handleSubmit(postData)} className={`${styles.caixa_form}  rounded`}>
                        <Row className={styles.titulo}>
                            <h2>Logar</h2>
                        </Row>

                        <FloatingLabel controlId="nome_user" label="Usuário:" >
                            <Form.Control as='input' type="text" placeholder="Joao"
                                {...register('nome_user')}
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="senha_user" label="Senha" >
                            <Form.Control type="password" placeholder="Passsword"
                                {...register('senha_user')}
                            />
                        </FloatingLabel>

                        <Container className={styles.caixa_links}>
                            <Row>
                                {/* <Link to='/inicio'> */}
                                <Button size="md" className=" bg-primary" type="submit">Login</Button>
                                {/* </Link> */}
                            </Row>
                            <Row>
                                <Button size="md" className=" bg-danger" onClick={() => reset()}  >Limpar</Button>
                            </Row>
                        </Container>

                    </Form>

                </Container>
            </Row>
        </Container>

    )
}