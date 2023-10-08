// IMPORTANDO BIBLIOTECAS
import axios from "axios"

// IMPORTANDO ROTAS
import { useNavigate } from "react-router-dom";

// IMPORTANDO ELEMENTOS 
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css'

// Notificação
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// IMPORTANDO ELEMENTOS 
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

export default function Signin() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // Utilizando navegações entre rotas
    const navigate = useNavigate()

    const postData = async (evento) => {
        console.log(evento)
        await toast.promise(
            axios.post("http://localhost:3001/participante/cadastrar", { evento }), {
            pending: 'Enviando ....',
            success: 'Cadastro Registrado',
            error: 'Cadastro não Registrado'
        })
            .then(response => {
                console.log(response.status + "Usuario enviado")
                // notify()

                setTimeout(() => { return navigate("/") }, 5000)


            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }


    return (
        <div>
            <Container className={styles.conteiner}>
                <Row className={`${styles.linha} ${'bg-dark'}`}>
                    <Col sm={12} md={8} lg={6} xl={5} className={styles.coluna}>
                        <Card className={`${styles.cartao}`}  >
                            <Card.Body className=" p-5 text-center">

                                <h3 className="mb-5">Login</h3>
                                <FloatingLabel controlId="floatingInput" label="E-mail" className="mb-3">
                                    <Form.Control as='input' type="email" placeholder="name@example.com"
                                        {...register('email_user')}
                                    />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPassword" label="Senha" className="mb-5">
                                    <Form.Control type="password" placeholder="Password"
                                        {...register('senha_user')}
                                    />
                                </FloatingLabel>
                                <Link to='/inicio'>
                                    <Button variant="dark" size="md" className=" btn-block" type="submit">Login</Button>
                                </Link>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}