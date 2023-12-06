import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css'
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// IMPORTANDO CAMINHO DAS ROTAS
import App from './App.js'

import Login from './pages/Login/Index.jsx';
import Principal from './pages/Principal/Index.jsx';

import EventoCadastrar from './pages/Eventos/Evento_Cadastrar.jsx';
import EventosOpcoes from "./pages/Eventos/Evento_Principal"
import EventoRegistro from './pages/Eventos/Evento_Registro.jsx';
import EventoLista from './pages/Eventos/Evento_Lista.jsx'
import EventoListaPesquisar from './pages/Eventos/Evento_Lista_Participante.jsx';
import EventoListaEvento from './pages/Eventos/Evento_Lista_Evento.jsx'

import Qrcode from "./pages/QrCode/Index_qrcode.jsx"
import QrcodeGerar from "./pages/QrCode/GerarQrcode.jsx"
import QrcodeSaida from './pages/QrCode/Qrcode_saida.jsx'

import CadastrarUsuario from './pages/Usuarios/cadastrar_usuarios.jsx';
import ConfirmarUsuario from './pages/Usuarios/confirmar_usuario';
import InscricaoParticipante from './pages/Usuarios/inscricao_participante.jsx';
import ConfirmacaoParticipacao from './pages/Usuarios/confirmacao_participacao.jsx';


// CONJUNTO DE ROTAS DO SITE
const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    children: [
      {
        path: "/inicio/inscricao_participante",
        element: <InscricaoParticipante />
      }
    ]
  },
  {
    path: "/inicio",
    // element: <inicio/>
    element: <App />,
    children: [
      {
        path: "/inicio",
        element: <Principal />
      },
      {
        path: "/inicio/eventos",
        element: <EventoCadastrar />
      },
      {
        path: "/inicio/login",
        element: <Login />
      },
      {
        path: "/inicio/qrcode",
        element: <Qrcode />
      },
      {
        path: "/inicio/qrcode/gerar",
        element: <QrcodeGerar />
      },
      {
        path: "/inicio/qrcode/saida",
        element: <QrcodeSaida />
      },
      {
        path: "/inicio/Eventos_Opcoes",
        element: <EventosOpcoes />
      },
      {
        path: "/inicio/Evento_Registro",
        element: <EventoRegistro />
      },
      {
        path: "/inicio/evento_lista",
        element: <EventoLista />
      },
      {
        path: "/inicio/evento_lista_pesquisa",
        element: <EventoListaPesquisar />
      },
      {
        path: "/inicio/evento_lista_evento",
        element: <EventoListaEvento />
      },
      {
        path: "/inicio/Cadastrar_usuario",
        element: <CadastrarUsuario />
      },
      {
        path: "/inicio/confirmar_presenca",
        element: <ConfirmarUsuario />
      }
    ]
  },

  {
    path: "/inicio/confirmacao_participante",
    element: < ConfirmacaoParticipacao />
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>

);
