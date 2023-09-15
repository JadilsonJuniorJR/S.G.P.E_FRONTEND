import { Container, Row, Col } from "react-bootstrap";
import axios from "axios"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// import logo from "../../assets/icone_evento.png"
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

export default function Eventos() {

  const [nome_evento, setNome_Evento] = useState('');
  const [organizador, setOrganizador] = useState('');
  const [descricao, setDescricao] = useState('');


  // const [dados, setDados] = useState({
  //   nome_evento: '',
  //   organizador: '',
  //   descricao: ''
  // })

  // const handleInput = (e) => {
  //   setDados({...dados, [e.target.name]: e.target.e })
  //   console.log(dados)
  // }

  // const handleSubmit = (evento) => {
  //   evento.preventDefault();
  //   axios.post("http://localhost:3001/evento/inserir", { dados })
  //     .then(response => console.log(response))
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  //   // alert("Enviou")
  // }

  
  // const handleSubmit = (evento) => {
  //   evento.preventDefault();
  //   axios.post("http://localhost:3001/evento/inserir", nome_evento,organizador,descricao )
  //     .then(response => console.log(response))
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  //   // alert("Enviou")
  // }


    const postData = (evento)=>{
      evento.preventDefault();
        axios.post("http://localhost:3001/evento/inserir", {nome_evento,organizador,descricao} )
          .then(response => console.log(response))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
        // alert("Enviou")
    }
 
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
                  onChange={(e) => setNome_Evento(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicOrganizador">
                <Form.Label>Organizador:</Form.Label>
                <Form.Control type="text" placeholder="Digite o nome do organizador:"
                  value={organizador}
                  onChange={(e) => setOrganizador(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição:</Form.Label>
                <Form.Control as="textarea" className={styles.form_tamanho} rows={3}
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)} />
              </Form.Group>

              <Button variant="danger" type="submit" onClick={postData}>
                Enviar
              </Button>
            </Form>

          </Container>

        </Col>
      </Row>

    </Container>

  )
}
