import { Button, Card, Col, Container, Row } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css'
export default function Signin() {
    return (
        <div>
            <Container className={styles.alinhamento}>
                <Row className="d-flex justify-content-center align-content-center bg-dark h-75 w-75">
                    <Col sm={12} md={8} lg={6} xl={5} className="w-50">
                        <Card className="card shadow-2-strong min-vh-10 w-100"  >
                            <Card.Body className="card-body p-5 text-center">

                                <h3 className="mb-5">Login</h3>
                                <FloatingLabel controlId="floatingInput" label="E-mail" className="mb-3">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPassword" label="Senha" className="mb-5">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>

                                <Button variant="dark" size="md" className=" btn-block" type="submit">Login</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}