import { Routes, Route } from 'react-router-dom';

import Cabecalho from './components/Header/Index'
import BarraLateral from './components/BarraLateral/Index'

import Main from './pages/Main/Index'
import Eventos from './pages/Eventos/index'
import Signin from './pages/Signin/Index'
import Signup from './pages/Signup/Index'
import { Container, Row } from 'react-bootstrap';

export default function Router() {
    return (
        <>
            <Cabecalho/>
            <BarraLateral />
            <Routes>
                {/* Renderização da Pasta raiz */}
                <Route path='/' element={<Main />} />
                <Route path='/eventos' element={<Eventos />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </>


    )


}