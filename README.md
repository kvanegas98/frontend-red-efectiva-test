# Guía de Inicio para el Proyecto Node.js con React usando NPM o Docker

Puedes comenzar a trabajar en este proyecto utilizando npm o Docker. A continuación, te detallo los pasos para iniciar el desarrollo.

## Requisitos Previos

Antes de comenzar, asegúrate de tener Node.js instalado en tu sistema version utilizada 20.10.0. Si no lo tienes, puedes descargarlo desde el sitio oficial de Node.js.
 [Descargas de Node.js.](https://nodejs.org/en/download)

## Uso de NPM

Para comenzar con npm, sigue estos pasos:

1. Instalación de Dependencias
Dirígete a la carpeta del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```npm install```

2. Instalación de Create React App (si aún no está instalado)
Si no tienes Create React App instalado globalmente, ejecuta:

```npm install -g create-react-app```

3. Instalación de React Bootstrap
```npm install react-bootstrap bootstrap```

4. Iniciar la Aplicación
Una vez que todas las dependencias estén instaladas, inicia la aplicación React en modo de desarrollo con:
```npm start```

### Uso de Docker

Si prefieres utilizar Docker, estos son los pasos que debes seguir:

1. Construir la Imagen Docker
Desde la raíz del proyecto, ejecuta el siguiente comando para construir la imagen Docker:

```docker build -t front-red-efectiva .```

2. Ejecutar el Contenedor Docker
Después de construir la imagen, ejecuta el contenedor Docker de la aplicación con:

```docker run -p 3000:3000 front-red-efectiva```

Accede a la aplicación desde tu navegador en la dirección: http://localhost:3000.

Este comando instalará todas las dependencias necesarias para el proyecto.