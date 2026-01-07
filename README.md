IRUPE | Task Management System
Irupé es una solución web de productividad diseñada para optimizar la organización personal mediante un sistema de gestión de tareas integrado con una visualización de calendario interactiva.

Nota de Transparencia: Este proyecto es el resultado de un desarrollo colaborativo (Fork) realizado en el marco académico.

Mi Rol Técnico: Me enfoqué en el desarrollo de la gestión de tareas, abarcando desde la captura de datos en el formulario hasta su visualización y guardado automático en el navegador. Adicionalmente, colaboré en tareas de maquetación y lógica general junto a mis compañeras.

Arquitectura y Funcionalidades Técnicas
El proyecto es una Aplicación Web Dinámica que ejecuta toda la lógica en el navegador (Client-Side), utilizando LocalStorage como base de datos local.

1. Gestión de Tareas 
Implementación de lógica JavaScript Vanilla para la manipulación interactiva del DOM:

Captura y Validación: Lógica para procesar el formulario de nuevas tareas, validar campos vacíos y construir objetos JSON estructurados.

Renderizado Dinámico: Inyección de HTML desde JavaScript para crear las tarjetas visuales de las tareas en tiempo real sin recargar la página.

Persistencia de Datos: Sistema de almacenamiento local para guardar, recuperar y actualizar el array de tareas del usuario entre sesiones.

2. Integración de Interfaz
Interacción Modal: Control de eventos para la apertura y cierre de ventanas modales al crear o editar registros.

Feedback Visual: Implementación de estilos condicionales (colores de prioridad) aplicados dinámicamente a los elementos creados.

Auth Simulation: Sistema de autenticación simulado con validación de credenciales y manejo de tokens de sesión.

Stack Tecnológico
Core: JavaScript (ES6+), HTML5 Semántico.

UI Framework: Bootstrap 5 (Grillas y Modales).

Estilizado: CSS3.

Persistencia: LocalStorage API.

Control de Versiones: Git / GitHub.
