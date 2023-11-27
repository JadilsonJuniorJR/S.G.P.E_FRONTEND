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



export default function Evento_Cadastrar() {


  // Utilizando a biblioteca userForm
  const { register, handleSubmit, reset } = useForm();

  // Utilizando navegações entre rotas
  const navigate = useNavigate()

  // Função para limpar campo de formulario
  const limparForm = (e) => {
    reset({
      nome_evento: '',
      // organizador: '',
      data_inicio: '',
      hora_inicio: '',
      data_termino: '',
      hora_termino: '',
      tolerancia: '',
      descricao: ''
    })
  }

  // REALIZANDO POST PARA O SERVIDOR
  const postData = async (evento) => {
    console.log(evento)
    await toast.promise(
      axios.post("http://localhost:8080/evento/cadastrar_evento", { evento }), {
      pending: 'Enviando ....',
      success: 'Evento Registrado',
      error: 'Evento não Registrado'
    })
      .then(response => {
        console.log(response.status + " Evento enviado")
        // REALIZANDO ESPERA PARA REDIRECIONAMENTO DE PAGINA
        setTimeout(() => { return navigate("/inicio") }, 5000)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }


  return (
    <Container className={styles.caixa_cadastrar} >
      <Row>
        <h2 >Criar Eventos </h2>
      </Row>

      <Row className={` ${styles.linha_formulario}`}>
        <ToastContainer></ToastContainer>

        <Container className={` ${styles.caixa_interna} ${'  p-4 bg-dark rounded'}`}>
          <Form onSubmit={handleSubmit(postData)} >
            <Row >
              <Form.Group as={Col} className="mb-3" controlId="nome_evento">
                <Form.Label>Nome do Evento: </Form.Label>
                <Form.Control as='input' type="text" placeholder="Digite o nome do Evento:" required
                  {...register('nome_evento')}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3" controlId="descricao">
                <Form.Label>Data do Inicio:</Form.Label>

                <Form.Control as='input' type="date"
                  {...register('data_inicio')} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Hora inicial </Form.Label>
                <Form.Control as='input' type="time"
                  {...register('hora_inicio')} />
              </Form.Group>

            </Row>

            <Row >
              <Form.Group as={Col} className="mb-3" controlId="descricao">
                <Form.Label>Data do Termino :</Form.Label>

                <Form.Control as='input' type="date"
                  {...register('data_termino')} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Hora do Termino </Form.Label>
                <Form.Control as='input' type="time"
                  {...register('hora_termino')} />
              </Form.Group>

            </Row>
            <Row>
              <Form.Group as={Col} sm={6} md={6} lg={6} controlId="formGridState">
                <Form.Label>Tolerância (min.) </Form.Label>
                <Form.Control as='input' type="number"
                  {...register('tolerancia')} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="descricao">
              <Form.Label>Descrição do Evento:</Form.Label>
              <Form.Control as='textarea' type="text" rows={2}
                {...register('descricao')} />
            </Form.Group>

            <Button variant="danger" type="submit" className="me-2" > Enviar </Button>
            <Button variant="primary" type="button" onClick={limparForm} > Limpar </Button>
          </Form>
        </Container>
      </Row>
    </Container>

  )
}
