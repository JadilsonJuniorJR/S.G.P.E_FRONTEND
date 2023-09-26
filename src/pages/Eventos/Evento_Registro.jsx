import Table from 'react-bootstrap/Table';
import { Container, Row } from "react-bootstrap";
import axios from 'axios';
import { useState } from 'react';


export default function Evento_Registro() {
    const [objeto,setObjetos]=useState({"id_evento":"", "nome_evento":"", "organizador":"","descricao":""})
    axios.get('http://localhost:3001/evento/buscar_eventos')
        .then((response) => {
            console.log(response.data.resultado)
            
        })
        .catch((error) => {
            console.error('Erro ao buscar dados:', error);
        });
    

    return (
        <Container fluid >
            {/* Linha superior  */}
            <Row >
                <div>
                    <Table responsive="md">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome do Evento</th>
                                <th>Responsavel</th>
                                <th>Participantes Total</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {dados.map((item) => (
                                <tr key={item.id_evento}>
                                    <td>{item.nome_evento}</td>
                                    <td>{item.organizador}</td>
                                    <td>{item.descricao}</td>
                                </tr>
                            ))} */}
                        </tbody>
                    </Table>
                    <Table responsive="lg">
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
                    </Table>
                    <Table responsive="xl">
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
                    </Table>
                </div>
            </Row>
        </Container>
    )
}

