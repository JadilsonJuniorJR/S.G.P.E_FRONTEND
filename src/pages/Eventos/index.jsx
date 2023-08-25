import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// import logo from "../../assets/icone_evento.png"
import styles from "./styles.module.css";



export default function Eventos() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={12} className={` ${styles.caixa_comprimento}`}>
          <h2 >Criar Eventos </h2>
          <Container fluid className={` ${styles.caixa_interna} ${'bg-dark text-white p-4'}`}>
            <Form className="overflow-hidden">

              <Form.Group className="mb-3" controlId="formBasicNomeEvento">
                <Form.Label>Nome do Evento: </Form.Label>
                <Form.Control type="text" placeholder="Digite o nome do evento:" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicOrganizador">
                <Form.Label>Organizador:</Form.Label>
                <Form.Control type="text" placeholder="Digite o nome do organizador:" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição:</Form.Label>
                <Form.Control as="textarea" className={styles.form_tamanho} rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>

          </Container>

        </Col>
      </Row>

    </Container>

  )
}
