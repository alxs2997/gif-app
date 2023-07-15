//el modo estricto ejecuta el proyecto dos veces para capturar errores
import React from 'react'
//ocupa react dom para renderizar el proyecto
import ReactDOM from 'react-dom/client'
//importamos el componente app
import App from './App.jsx'
//importamos el css llamado index

import './Estilos/estilos.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
