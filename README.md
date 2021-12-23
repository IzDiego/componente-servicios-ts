# 1. Requisitos

## 1.1. Paquetes

Instalar los siguientes paquetes con: 

```
npm install
```

- MUI5: ` npm install @mui/material @emotion/react @emotion/styled `
- Typescript: ` npm install --save-dev typescript ts-loader @types/react @types/react-dom `

# 2. ¿Cómo instalar el componente?

## 2.1. Instalación

```
npm install @lcmconsultoria/componente-servicios-ts
```

## 2.2. Forma de usar el componente

```jsx
import ListaServicios from '@lcmconsultoria/componente-servicios-ts/lib/ListaServicios'

const listaServicios:Array<Object> = [
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

return (<ListaServicios {...listaServicios}/>);

```

# 3. Posibles updates

- [ ]  Recibir titulo de sección.
- [ ]  Estilos de tarjetas.

# 4. Versiones

- 1.0.0 - Crea una sección con servicios, requiere enviarle un objeto donde vendrán los servicios que se quieren mostrar.