// IMPORTANDO BIBLIOTECAS
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

import { useLocation } from 'react-router-dom';



export default function Cadastrar_usuario() {
    // Utilizando a biblioteca userForm
    const { register, handleSubmit, reset } = useForm();

    // Utilizando navegações entre rotas
    const navigate = useNavigate()

    // Pegando o ID do Evento vinda pelo QRCODE
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");


    const postData = async (dados) => {

        console.log(dados)
        if (dados.id_evento === '') {
            dados.id_evento = id
        }

        await toast.promise(
            axiosInstance.post("/participante/cadastrar", { dados }), {
            pending: 'Enviando ....',
            success: 'Cadastro Registrado !',
            error: 'Cadastro não Registrado !'
        })
            .then(response => {
                console.log(response.status + " Usuario enviado")
                setTimeout(() => { return navigate("/inicio") }, 4000)
            })
            .catch((err) => {
                // toast({error: 'Cadastro não Registrado !'})
                console.error("ops! ocorreu um erro de requisição " + err);
            });
    }


    return (
        <Container className={` ${styles.caixa_cadastrar}`}>
            <Row>
                <h2 >Formulário de Inscrições </h2>
            </Row>
            <Row>
                <Col className={` ${styles.caixa_secundaria}`}>
                    <ToastContainer pauseOnFocusLoss={false}></ToastContainer>

                    <Container fluid className={` ${styles.caixa_interna} ${' p-4 bg-dark rounded'}`}>
                        <Form onSubmit={handleSubmit(postData)} className={styles.caixa_form}>
                            <Row>
                                <Form.Group className="mb-3" controlId="nome_user">
                                    <Form.Label>Nome: </Form.Label>
                                    <Form.Control as='input' type="text" placeholder="Digite o nome:"
                                        {...register('nome_user')}
                                    />
                                </Form.Group>

                            </Row>

                            <Row>
                                <Form.Group className="mb-3" controlId="matricula_user">
                                    <Form.Label>Matrícula:</Form.Label>
                                    <Form.Control as='input' type="number" placeholder="Digite a matrícula:" required
                                        {...register('matricula', { maxLength: 10 })} />
                                </Form.Group>

                            </Row>

                            <Row>
                                <Form.Group as={Col} xs={6} md={6} lg={6} className="mb-3" controlId="id_evento">
                                    <Form.Label>ID Evento:</Form.Label>
                                    <Form.Control as='input' type="number" placeholder="Digite o ID do Evento:"
                                        {...register('id_evento')} />
                                </Form.Group>

                                <Form.Group as={Col} xs={6} md={6} lg={6} className="mb-3" controlId="curso_user">
                                    <Form.Label>Curso:</Form.Label>
                                    <Form.Control as='input' type="text" placeholder="Digite o curso:"
                                        {...register('curso')} />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group className="mb-3" controlId="campus_user">
                                    <Form.Label>Campus:</Form.Label>
                                    <Form.Control as='input' type="text" placeholder="Digite o Campus:"
                                        {...register('campus')} />
                                </Form.Group>
                            </Row>


                            <Row>
                                <Form.Group className="mb-3" controlId="email_user">
                                    <Form.Label>E-mail:</Form.Label>
                                    <Form.Control as='input' type="text" placeholder="Digite o E-mail:"
                                        {...register('email')} />
                                </Form.Group>
                            </Row>


                            <Button variant="danger" type="submit" className="me-2">
                                Enviar
                            </Button>
                            <Button variant="primary" type="button"
                                onClick={() => reset()} >
                                Limpar
                            </Button>
                        </Form>

                    </Container>

                </Col>
            </Row>

        </Container>

    )
}
