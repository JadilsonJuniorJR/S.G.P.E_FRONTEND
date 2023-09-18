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
const router = createBrowserRouter([
  {
    path: "/",
    // element: <Principal/>
    element: <App />,
    children: [
      {
        path: "/",
        element: <Principal />
      },
      {
        path: "/eventos",
        element: <Eventos />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/Eventos_Opcoes",
        element: <Eventos_Opcoes />
      },
      {
        path: "/Evento_Registro",
        element: <Evento_Registro />
      },
      {
        path: "/Cadastrar_usuario",
        element: <Cadastrar_usuario />
      }
    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

