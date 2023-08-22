import { Container, Navbar, Row, Col } from 'react-bootstrap'
import styles from './styles.module.css'

export default function BL03() {
    return (

        <Container fluid>
            <Row>
                <Col sm={12} md={6} lg={3} className={styles.flutuar}>
                    <p className='text-white'> Barra Lateral  </p>
                    {/* Conteúdo da coluna */}
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Row className={`${'bg-danger'} ${styles.largura}`}>
                        <p className='text-white'> Coluna 2, Caixa 1  </p>
                    </Row>
                    <Row className={`${'bg-danger'} ${styles.largura}`}>
                        <p className='text-white'> Coluna 2, Caixa 2  </p>
                    </Row>
                    {/* Conteúdo da coluna */}
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <p className='text-dark'> Coluna 3, Caixa 1  </p>
                    {/* Conteúdo da coluna */}
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <p className='text-dark'> Coluna 4, Caixa 1  </p>
                    {/* Conteúdo da coluna */}
                </Col>
            </Row>
        </Container>



    )
}