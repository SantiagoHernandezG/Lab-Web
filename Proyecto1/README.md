# Rifa Yakult 2022

## Iniciar el proyecto

Crea una nueva carpeta para tu proyecto y dentro de la carpeta ejecuta el
siguiente comando en tu terminal.

```bash
npm init -i
```

Después de ejecutar el comando se va a generar dentro de la carpeta el
archivo `package.json` este archivo es el que utiliza `npm` para identificar los
paquetes necesarios de tu proyecto.

El contenido de `package.json`  será:

```json
{
  "name": "proyecto1",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node src/server.js",
    "devstart": "nodemon src/server.js"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "node-fetch": "^3.2.10",
    "pug": "^2.0.4"
  },
  "devDependencies": {
    "dotenv": "^16.0.2",
    "mongoose": "^6.6.1",
    "nodemon": "^2.0.19"
  },
  "type": "module"
}

```

## Base de Datos

La base de datos del proyecto se encuentra en un cluster online de MongoDB, por
lo que no es necesario precargar información, ya hay datos suficientes para las
pruebas en la colección que se utiliza en este proyecto.

## Iniciar el proyecto

Una vez instalados los módulos necesarios, ejecute el siguiente comando

```bash
npm start
```

El proyecto se inicia por defecto en el puerto `80` por lo que en su buscador
deberá ingresar la siguiente dirección http://localhost

## Pruebas

Dentro de las carpetas `api` y `client` se encuentra la carpeta `test`. Cada
una cuenta con un archivo `requests.http` para realizar peticiones HTTP a la API
y al Cliente. 