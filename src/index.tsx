import React from 'react';
import ReactDOM from 'react-dom';
//import ListaServicios from './ListaServicios';
import reportWebVitals from './reportWebVitals';
import ListaServicios from '@lcmconsultoria/componente-servicios-ts/lib/ListaServicios'

type Servicios = {
  titulo: String;
  contenido: String;
  botonlink: String;
  imagenlink: String;
};

const listaServicios:Array<Servicios> = [
  {
    titulo: "MUI",
    contenido: "Lorem ipsum",
    botonlink: "https://mui.com/",
    imagenlink: "https://mui.com/static/logo.png",
  },
  {
    titulo: "YouTube",
    contenido: "Lorem ipsum",
    botonlink: "https://www.youtube.com/",
    imagenlink: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg",
  },
  {
    titulo: "Twitch",
    contenido: "Lorem ipsum",
    botonlink: "https://www.twitch.tv/",
    imagenlink: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <ListaServicios {...listaServicios}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
