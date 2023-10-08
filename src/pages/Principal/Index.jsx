import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import styles from "./styles.module.css";

import logo from "../../assets/icone_evento.png"
import icone_evento from "../../assets/evento_criar.png"
import icone_usuario from "../../assets/pesquisar_usuario.png"
import icone_evento_opcoes from "../../assets/evento_opcoes.jpg"

export default function Principal() {
    return (
        <Container  >
            {/* Linha superior  */}
            <Row >
                <Col sm={12} md={6} lg={4} className={`${styles.caixa_secundaria} `} >
                    <Container className={`${styles.caixa} `}>

                        {/* Icone com Link */}
                        <Link as={Link} to="/inicio/eventos" className={`${styles.links}`} >
                            <img className={styles.card_img} src={icone_evento} alt="Icones de Criar Eventos" />
                        </Link>
                        {/* Botão para Evento  */}
                        <Link to='/inicio/eventos'>
                            <Button variant="outline-dark" className={`${styles.botao} `} size="lg"> Criar Eventos </Button>
                        </Link>

                    </Container>
                </Col>
                <Col sm={12} md={6} lg={4} className={styles.caixa_secundaria}>
                    <Container className={`${styles.caixa}`}>

                        {/* Icone com Link */}
                        <Link to="#" className={`${styles.links}`} >
                            <img className={styles.card_img} src={icone_usuario} alt="Img Logo" />
                        </Link>
                        {/* Botão para Pesquisar Usuario  */}
                        <Link to='#'>
                            <Button variant="outline-dark"  className={`${styles.botao} `} size="lg"> Pesquisar Usuários </Button>
                        </Link>
                        
                    </Container>
                </Col>


                <Col sm={12} md={6} lg={4} className={styles.caixa_secundaria}>
                    <Container className={`${styles.caixa}`}>

                        {/* Icone com Link */}
                        <Link as={Link} to="/inicio/Eventos_Opcoes" className={`${styles.links}`} >
                            <img className={styles.card_img} src={icone_evento_opcoes} alt="Img Logo" />
                        </Link>
                        {/* Botão para Evento  */}
                        <Link to='/inicio/Eventos_Opcoes'>
                            <Button variant="outline-dark"  className={`${styles.botao} `} size="lg"> Eventos Opçoes </Button>
                        </Link>

                    </Container>
                </Col>
                <Col sm={12} md={6} lg={4} className={styles.caixa_secundaria}>
                    <Container className={`${styles.caixa}`}>

                        {/* Icone com Link */}
                        <Nav.Link as={Link} to="/#" className="d-flex flex-column justify-content-center align-items-center" >
                            <img className={styles.card_img} src={logo} alt="Img Logo" />
                        </Nav.Link>
                        {/* Botão para Evento  */}
                        <Link to='/inicio/Cadastrar_usuario'>
                            <Button variant="outline-dark" className={`${styles.botao} `} size="lg"> Cadastrar Usuários em Eventos </Button>
                        </Link>

                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
