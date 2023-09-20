// IMPORTANDO BIBLIOTECAS
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap";

// IMPORTANDO ROTAS
import { useNavigate } from "react-router-dom";

// IMPORTANDO ELEMENTOS 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

// IMPORTANDO ESTILO
// import logo from "../../assets/icone_evento.png"
import styles from "./styles.module.css";


// Notificação
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Eventos() {


  // Utilizando a biblioteca userForm
  const { register, handleSubmit, reset } = useForm();

  // Utilizando navegações entre rotas
  const navigate = useNavigate()

  // Função para limpar campo de formulario
  const limparForm = (e) => {
    reset({
      nome_evento: '',
      organizador: '',
      descricao: '',
    })
  }

  // REALIZANDO POST PARA O SERVIDOR
  const postData = async (evento) => {
    console.log(evento)
    await toast.promise(
      axios.post("http://localhost:3001/evento/inserir", { evento }), {
      pending: 'Enviando ....',
      success: 'Evento Registrado',
      error: 'Evento não Registrado'
    })
      .then(response => {
        console.log(response.status + " Evento enviado")
        // REALIZANDO ESPERA PARA REDIRECIONAMENTO DE PAGINA
        setTimeout(() => { return navigate("/") }, 5000)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }


  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={12} lg={12} className={` ${styles.caixa_comprimento}`}>
          <ToastContainer></ToastContainer>
          <h2 >Criar Eventos </h2>
          <Container fluid className={` ${styles.caixa_interna} ${' p-4 bg-dark'}`}>

            <Form onSubmit={handleSubmit(postData)} className="overflow-hidden">

              <Form.Group className="mb-3" controlId="nome_evento">
                <Form.Label>Nome do Evento: </Form.Label>
                <Form.Control as='input' type="text" placeholder="Digite o nome do Evento:"
                  {...register('nome_evento')}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="organizador">
                <Form.Label>Organizador:</Form.Label>
                <Form.Control as='input' type="text" placeholder="Digite o nome do Organizador:"
                  {...register('organizador')} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="descricao">
                <Form.Label>Descrição do Evento:</Form.Label>
                <Form.Control as='textarea' type="text" rows={3}
                  {...register('descricao')} />
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
