// IMPORTANDO BIBLIOTECAS DE LAYOUT 
import Table from 'react-bootstrap/Table';
import { Container, Row } from "react-bootstrap";

// BIBLIOTECA PARA MANIPULAR DADAS 
import moment from 'moment/moment';

// BIBLIOTECAS REACT
import { useState, useEffect } from 'react';

// IMPORTANDO ARQUIVOS 
import axiosInstance from "../../axios/axiosInstance.js";
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
        <Container className={styles.caixa_registro} >
            <Row>
                <h3>Registro de Eventos</h3>
            </Row>
            <Row >
                <Container className={styles.tabela}>
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
                                        <td> {moment.utc(registro.data_inicio).format('DD-MM-YYYY')}</td>
                                        <td> {moment(registro.data_termino).format('DD/MM/YYYY')}</td>
                                        <td> {registro.descricao}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Container>
            </Row>
        </Container>
    )
}

