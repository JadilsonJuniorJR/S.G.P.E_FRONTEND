import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css'
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// IMPORTANDO CAMINHO DAS ROTAS
import App from './App.js'
import Principal from './pages/Principal/Index.jsx';
import Eventos from './pages/Eventos/index.jsx';
import Login from "./pages/Signin/Index";
import Eventos_Opcoes from "./pages/Eventos/Evento_Principal"
import Evento_Registro from './pages/Eventos/Evento_Registro.jsx';
import Cadastrar_usuario from './pages/Usuarios/cadastrar_usuarios.jsx';



// CONJUNTO DE ROTAS DO SITE
const rotas = createBrowserRouter([
  {
    path:'/',
    element:<Login />
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
        element: <Eventos />
      },
      {
        path: "/inicio/login",
        element: <Login />
      },
      {
        path: "/inicio/Eventos_Opcoes",
        element: <Eventos_Opcoes />
      },
      {
        path: "/inicio/Evento_Registro",
        element: <Evento_Registro />
      },
      {
        path: "/inicio/Cadastrar_usuario",
        element: <Cadastrar_usuario />
      }
    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);

