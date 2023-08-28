import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Nav}  from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import styles from "./styles.module.css";

import logo from "../../assets/icone_evento.png"
import icone_evento from "../../assets/calendario.png"
import icone_usuario from "../../assets/pesquisar_usuario.png"

export default function Principal() {
    return (
        <Container fluid >
            {/* Linha superior  */}
            <Row >
                <Col sm={12} md={6} lg={6} className={styles.caixa_comprimento} >
                    <Container className={`${styles.caixa}`}>
                        <Container className={`${styles.cx_interna}`}>
                            {/* Icone com Link */}
                            <Nav.Link as={Link} to="/eventos" className="d-flex flex-column justify-content-center align-items-center" > 
                                <img className={styles.card_img} src={icone_evento} alt="Img Logo"/>  
                            </Nav.Link>  
                            {/* Botão para Evento  */}
                            <Link to='/eventos'> 
                                <Button variant="outline-dark" size="lg"> Eventos </Button>  
                            </Link>
                        </Container>
                    </Container>
                </Col>
                <Col sm={12} md={6} lg={6} className={styles.caixa_comprimento}>
                    <Container className={`${styles.caixa}`}>
                        <Container className={`${styles.cx_interna}`}>
                            {/* Icone com Link */}
                            <Nav.Link as={Link} to="/#" className="d-flex flex-column justify-content-center align-items-center" > 
                                <img className={styles.card_img} src={icone_usuario} alt="Img Logo"/>  
                            </Nav.Link>  
                            {/* Botão para Pesquisar Usuario  */}
                            <Link to='/eventos'> 
                                <Button variant="outline-dark" size="lg"> Pesquisar Usuários </Button>  
                            </Link>
                        </Container>
                    </Container>
                </Col>
            </Row>
            {/* Linha Infeiror  */}
            <Row>
                <Col sm={12} md={6} lg={6} className={styles.caixa_comprimento}>
                        <Container className={`${styles.caixa}`}>
                        <Container className={`${styles.cx_interna}`}>
                            {/* Icone com Link */}
                            <Nav.Link as={Link} to="/#" className="d-flex flex-column justify-content-center align-items-center" > 
                                <img className={styles.card_img} src={logo} alt="Img Logo"/>  
                            </Nav.Link>  
                            {/* Botão para Evento  */}
                            <Link to='/eventos'> 
                                <Button variant="outline-dark" size="lg"> Pesquisar Usuários </Button>  
                            </Link>
                        </Container>
                        </Container>
                    </Col>
                    <Col sm={12} md={6} lg={6} className={styles.caixa_comprimento}>
                        <Container className={`${styles.caixa}`}>
                        <Container className={`${styles.cx_interna}`}>
                            {/* Icone com Link */}
                            <Nav.Link as={Link} to="/#" className="d-flex flex-column justify-content-center align-items-center" > 
                                <img className={styles.card_img} src={logo} alt="Img Logo"/>  
                            </Nav.Link>  
                            {/* Botão para Evento  */}
                            <Link to='/eventos'> 
                                <Button variant="outline-dark" size="lg"> Pesquisar Usuários </Button>  
                            </Link>
                        </Container>
                        </Container>
                    </Col>
                {/* <Col sm={12} md={6} lg={6} className="border">
                    <p> Caixa Principal 4 </p>
                    <h1> Pagina Principal </h1>
                </Col> */}
            </Row>
        </Container>
    );
}


// <Card className={`${'card text-center border-secondary justify-content-center'} ${styles.card_comprimento}`}>
//                         <Card.Img  variant="top" src={logo} className={`${'container d-flex align-items-center justify-content-center card-img-top'} ${styles.card_img}`} />
//                         {/* <img className={styles.card_img} src={logo} alt="Img Logo" /> */}
//                         <Card.Body className="d-flex flex-column" >
                        
//                             <Button variant="dark" >Eventos</Button>
//                         </Card.Body>
//                     </Card>