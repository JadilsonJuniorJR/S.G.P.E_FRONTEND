

// IMPORTANDO ELEMENTOS 
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css'



// IMPORTANDO ELEMENTOS 
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

export default function Signin() {

    const { register } = useForm();




    return (

        <Container className={styles.conteiner}>
            <Row className={`${styles.caixa} ${'bg-dark'}`}>
                <Col sm={12} md={8} lg={6} xl={5} className={styles.coluna}>
                    <Card className={`${styles.cartao}`}  >
                        <Card.Body className=" p-5 text-center">

                            <h3 className="mb-5">Logar</h3>
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

    )
}