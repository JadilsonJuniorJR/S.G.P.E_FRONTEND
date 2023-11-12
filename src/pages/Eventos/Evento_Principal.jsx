import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import styles from './styles.module.css';


import icone_evento from "../../assets/evento_criar.png"
import icone_registro from "../../assets/pesquisar_evento.png"
import icone_listar from "../../assets/listar_eventos.png"


export default function Eventos() {

    return (
        <Container className={styles.caixa_principal}>
            {/* Linha superior  */}
            <Row>
                <h2>Eventos</h2>
            </Row>
            <Row >
                <Col className={styles.caixa_secundaria} >
                    <Container className={styles.caixa_terciaria}>
                        {/* Icone com Link */}
                        <Link as={Link} to="/inicio/eventos" className={styles.links} >
                            <img className={styles.card_img} src={icone_evento} alt="Icones de Criar Eventos" />
                        </Link>
                        {/* Botão para Evento  */}
                        <Link to='/inicio/eventos'>
                            <Button variant="outline-dark" className={styles.botao} size="lg"> Criar Eventos </Button>
                        </Link>
                    </Container>
                </Col>
                <Col className={styles.caixa_secundaria}>
                    <Container className={styles.caixa_terciaria}>
                        {/* Icone com Link */}
                        <Link to="/inicio/Evento_Registro" className={styles.links}>
                            <img className={styles.card_img} src={icone_registro} alt="Img Logo" />
                        </Link>
                        {/* Botão para Pesquisar Usuario  */}
                        <Link to='/inicio/Evento_Registro'>
                            <Button variant="outline-dark" className={styles.botao} size="lg"> Registros de Eventos </Button>
                        </Link>
                    </Container>
                </Col>
                <Col className={styles.caixa_secundaria}>
                    <Container className={styles.caixa_terciaria}>

                        {/* Icone com Link */}
                        <Nav.Link as={Link} to="/inicio/evento_lista" className={styles.links} >
                            <img className={styles.card_img} src={icone_listar} alt="Img Logo" />
                        </Nav.Link>
                        {/* Botão para Evento  */}
                        <Link to='/inicio/evento_lista'>
                            <Button variant="outline-dark" className={styles.botao} size="lg"> Listas do Evento</Button>
                        </Link>

                    </Container>
                </Col>
            </Row>
        </Container>

    )
}
