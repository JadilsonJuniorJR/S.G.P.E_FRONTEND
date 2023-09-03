import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
// import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// import logo from "../../assets/icone_evento.png"
import styles from "./styles.module.css";
import { useState } from "react";

export default function Eventos() {

  const [nome_evento, setNome_Evento] = useState([]);
  const [organizador, setOrganizador] = useState([]);
  const [descricao, setDescricao] = useState([]);

  
  const handleSubmit = (evento) =>{
    evento.preventDefault();
    alert("clicou")
    
  }

  

  // Requisição
//  const postForm= async() =>{
//   try{
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
//   }catch(){

//   }
//  }

  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={12} className={` ${styles.caixa_comprimento}`}>
          <h2 >Criar Eventos </h2>
          <Container fluid className={` ${styles.caixa_interna} ${' p-4'}`}>
            <Form className="overflow-hidden">

              <Form.Group className="mb-3" controlId="formBasicNomeEvento">
                <Form.Label>Nome do Evento: </Form.Label>
                <Form.Control type="text" placeholder="Digite o nome do evento:"
                  value={nome_evento}
                  onRateChange={(e) => setNome_Evento(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicOrganizador">
                <Form.Label>Organizador:</Form.Label>
                <Form.Control type="text" placeholder="Digite o nome do organizador:"
                  value={organizador}
                  onRateChange={(e) => setOrganizador(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição:</Form.Label>
                <Form.Control as="textarea" className={styles.form_tamanho} rows={3}
                  value={descricao}
                  onRateChange={(e) => setDescricao(e.target.value)} />
              </Form.Group>

              <Button variant="danger" type="submit" onClick={handleSubmit}>
                Enviar
              </Button>
            </Form>

          </Container>

        </Col>
      </Row>

    </Container>

  )
}
