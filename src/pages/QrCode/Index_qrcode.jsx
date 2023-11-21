import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import styles from './styles.module.css';


import icone_qr_entrada from '../../assets/qr_entrada.png'
import icone_qr_saida from '../../assets/qr_saida.png'
export default function Qrcode() {

    return (
        <Container className={styles.caixa_qrcode}>
            {/* Linha superior  */}
            <Row>
                <h2>Gerar QRCODE</h2>
            </Row>
            <Row >
                <Col className={styles.caixa_secundaria} >
                    <Container className={styles.caixa_terciaria}>
                        {/* Icone com Link */}
                        <Link to="/inicio/qrcode/gerar" className={styles.links} >
                            <img className={styles.card_img} src={icone_qr_entrada} alt="Icones de Gerar o QRCODE de Entrada" />
                        </Link>
                        {/* Botão para Evento  */}
                        <Link to='/inicio/qrcode/gerar'>
                            <Button variant="outline-dark" className={styles.botao} size="lg"> Gerar QRCODE Entrada </Button>
                        </Link>
                    </Container>
                </Col>
                <Col className={styles.caixa_secundaria}>
                    <Container className={styles.caixa_terciaria}>
                        {/* Icone com Link */}
                        <Link to='/inicio/qrcode/saida' className={styles.links}>
                            <img className={styles.card_img} src={icone_qr_saida} alt="Icones de Gerar o QRCODE de Saida" />
                        </Link>
                        {/* Botão para Pesquisar Usuario  */}
                        <Link to='/inicio/Evento_Registro'>
                            <Button variant="outline-dark" className={styles.botao} size="lg"> Gerar QRCODE Saída </Button>
                        </Link>
                    </Container>
                </Col>
            </Row>
        </Container>


    )
}
