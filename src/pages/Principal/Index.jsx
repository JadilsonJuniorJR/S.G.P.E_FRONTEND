import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "./styles.module.css";

import logo from "../../assets/icone_evento.png"

export default function Principal() {
    return (
        <Container fluid >
            <Row>
                <Col sm={12} md={6} lg={6} className={styles.caixa_comprimento}>
                    <Container className={`${styles.card}`}>
                        <div className={`${styles.cx_interna} ${'text-white'}`}>
                        <img className={styles.card_img} src={logo} alt="Img Logo" />
                         <Button variant="outline-dark" className={styles.button} >Eventos</Button> 
                        </div>
                           
                    </Container>
                </Col>
                <Col sm={12} md={6} lg={6} className="border">
                    <p> Caixa Principal 2 </p>
                    <h1> Pagina Principal </h1>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6} className={styles.comprimento}>
                    <p> Caixa Principal 3</p>
                    <h1> Pagina Principal </h1>
                </Col>
                <Col sm={12} md={6} lg={6} className="border">
                    <p> Caixa Principal 4 </p>
                    <h1> Pagina Principal </h1>
                </Col>
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