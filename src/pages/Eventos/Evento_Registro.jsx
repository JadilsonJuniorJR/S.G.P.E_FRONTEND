import { Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

import moment from 'moment/moment';

import axiosInstance from "../../axios/axiosInstance";

import styles from './styles.module.css'

export default function Evento_Registro() {
    const [Eventos_Registrados, setEventos_Registrados] = useState([])

    // O useEffect esta realizando a renderização uma unica vez ao iniciar a pagina 
    useEffect(() => {
        // Realizando a chamada ao servidor dos eventos realizados
        axiosInstance.get('/evento/buscar_eventos')
            .then((resposta) => {
                // console.log(resposta.data)
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
                <div className={`${styles.tabela}`}>
                    <Table  responsive="sm" striped bordered hover variant="dark">
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

                </div>
            </Row>
        </Container>
    )
}

