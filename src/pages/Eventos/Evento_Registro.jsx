import { Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment/moment';

import styles from './styles.module.css'

export default function Evento_Registro() {
    const [Eventos_Registrados, setEventos_Registrados] = useState([])

    let chave = 1
    // O useEffect esta realizando a renderização uma unica vez ao iniciar a pagina 
    useEffect(() => {
        // Realizando a chamada ao servidor dos eventos realizados
        axios.get('http://localhost:8080/evento/buscar_eventos')
            .then((resposta) => {
                console.log(resposta.data)
                setEventos_Registrados(resposta.data)
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });

    }, [])



    return (
        <Container fluid >
            {/* Linha superior  */}
            <Row >
                <h3>Registro de Eventos</h3>
                <div>
                    <Table responsive="sm" striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome do Evento</th>
                                <th>Responsavel</th>
                                <th>Data Inicio</th>
                                <th>Data Termino</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                Eventos_Registrados.map((registro) =>

                                    <tr>
                                        <td key={registro.id_evento}> {registro.id_evento}</td>
                                        <td> {registro.nome_evento}</td>
                                        <td> {registro.fk_id_adm}</td>
                                        <td> {moment(registro.data_inicio).format('L')}</td>
                                        <td> {moment(registro.data_termino).format('L')}</td>
                                        <td> {registro.descricao}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>

                    <section className={`${styles.container_fluid}`}>
                        <div className={`${styles.col} ${styles.col_12}`}>
                            <div className={`${styles.item}`}>12 colunas</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_6}`}>
                            <div className={`${styles.item}`}>6 colunas</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_6}`}>
                            <div className={`${styles.item}`}>6 colunas</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_1}`}>
                            <div className={`${styles.item}`}>1</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_1}`}>
                            <div className={`${styles.item}`}>1</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_1}`}>
                            <div className={`${styles.item}`}>1</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_1}`}>
                            <div className={`${styles.item}`}>1</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_1}`}>
                            <div className={`${styles.item}`}>1</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_1}`}>
                            <div className={`${styles.item}`}>1</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_1}`}>
                            <div className={`${styles.item}`}>1</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_1}`}>
                            <div className={`${styles.item}`}>1</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_1}`}>
                            <div className={`${styles.item}`}>1</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_1}`}>
                            <div className={`${styles.item}`}>1</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_1}`}>
                            <div className={`${styles.item}`}>1</div>
                        </div>
                        <div className={`${styles.col} ${styles.col_1}`}>
                            <div className={`${styles.item}`}>1</div>
                        </div>
                    </section>


                    {/* <Table responsive="lg">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>
                    </Table> */}

                </div>
            </Row>
        </Container>
    )
}

