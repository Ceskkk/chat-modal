# Prueba técnica: Chat Modal

## ¿Qué es?

Chat Modal parte de una prueba técnica que consiste en un componente el cual incorpora un chat a través de un modal.
El objetivo de este chat es el de comunicar a un estudiante con su tutor a través de mensajes directos, implementando la aparición de las entregas del estudiante.

## Requisitos mínimos

El uso de las siguientes herramientas es requerido:

- Vue 3
- Vite
- Pinia
- TailwindCSS

## Herramientas adicionales

El uso de herramientas adicionales es opcional, se han usado las siguientes:

- TS: Superset de JS para añadir tipado estático.
- pnpm: Herramienta alternativa a Yarn y a npm como gestor de paquetes. Presenta un mayor rendimiento y una mejora de seguridad.
- Vitest: Framework de testing relativamente nuevo, nativo de Vite. Interesante por su nivel de compatibilidad en diferentes ambitos (JSX, TS, UI Frameworks populares).
- Eslint + Prettier: Librerías para estandarizar la escritura de código.

## Diseño orientativo

[Descargar diseño](/assets/image_mockup.png)

## Objetivos y suposiciones

Dadas las indicaciones de la prueba técnica, se presupone lo siguiente:

- Solo desarrollamos la parte del alumno, es decir, suponemos que no hay que desarrollar el punto de vista del tutor y que ya hay un login previo con la cuenta del alumno.
- Tanto las entregas, como los primeros mensajes del tutor y del alumno serán mockeados, las entregas no tendran ningún descargable real.
- No hace falta una base de datos para guardar las conversaciones, lo guardaremos en el estado de la aplicación.

[Descargar instrucciones](/assets/prueba_desarrollo_frontend_isEazy.pdf)

## Instrucciones de ejecución

1. Clona el repositorio
   `git clone https://github.com/Ceskkk/chat-modal`
2. Entra en el proyecto e instala las dependencias
   `cd chat-modal`
   `pnpm install`
3. Ejecuta el servidor
   `pnpm dev`
4. ¡Listo! Ya tienes la aplicación funcionando
