import { Container, Row, Col } from "react-bootstrap";
import axios from "axios"


import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from "./styles.module.css";
import { useForm } from "react-hook-form";



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Cadastrar_usuario() {

    // Utilizando a biblioteca userForm
    const { register, handleSubmit, reset } = useForm();

    // Utilizando navegações entre rotas
    const navigate = useNavigate()

    const notify = async () => {
        toast.success("Enviado com Sucesso");
        console.log("Enviou")
    }
    // Função para limpar campo de formulario
    const limparForm = (e) => {
        reset({
            nome_user: '',
            matricula: '',
            curso: '',
            email: ''
        })
    }



    const postData = (evento) => {
        console.log(evento)
        axios.post("http://localhost:3001/participante/cadastrar", { evento })
            .then(response => {
                console.log(response.status + "Usuario enviado")
                notify()
                // return navigate("/")
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }



    return (
        <Container fluid>
            <Row>
                <Col sm={12} md={6} lg={12} className={` ${styles.caixa_comprimento}`}>
                    <ToastContainer></ToastContainer>
                    <h2 >Formulário de Inscrições </h2>
                    <Container fluid className={` ${styles.caixa_interna} ${' p-4 bg-dark'}`}>
                        <Form onSubmit={handleSubmit(postData)} className="overflow-hidden">

                            <Form.Group className="mb-3" controlId="nome_user">
                                <Form.Label>Nome: </Form.Label>
                                <Form.Control as='input' type="text" placeholder="Digite o seu nome:"
                                    {...register('nome_user')}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="matricula_user">
                                <Form.Label>Matrícula:</Form.Label>
                                <Form.Control as='input' type="number" placeholder="Digite a sua matrícula:"
                                    {...register('matricula')} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="curso_user">
                                <Form.Label>Curso:</Form.Label>
                                <Form.Control as='input' type="text" placeholder="Digite o seu curso:"
                                    {...register('curso')} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email_user">
                                <Form.Label>E-mail:</Form.Label>
                                <Form.Control as='input' type="text" placeholder="Digite o seu E-mail:"
                                    {...register('email')} />
                            </Form.Group>

                            <Button variant="danger" type="submit" >
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
