import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import styles from './styles.module.css';


import icone_evento from "../../assets/evento_criar.png"
import icone_usuario from "../../assets/pesquisar_evento.png"



export default function Qrcode() {

    return (
        <Container className={styles.caixa_primaria}>
            {/* Linha superior  */}

            <Row  >
                <Col sm={12} md={6} lg={4} className={`${styles.caixa_secundaria} `} >
                    <Container className={`${styles.caixa_terciaria} `}>

                        {/* Icone com Link */}
                        <Link as={Link} to="/inicio/qrcode/gerar" className={`${styles.links}`} >
                            <img className={styles.card_img} src={icone_evento} alt="Gerar QRCODE" />
                        </Link>
                        {/* Botão para Evento  */}
                        <Link to='/inicio/qrcode/gerar'>
                            <Button variant="outline-dark" className={`${styles.botao} `} size="lg"> Gerar QRCODE</Button>
                        </Link>

                    </Container>
                </Col>
            </Row>
        </Container>

    )
}
