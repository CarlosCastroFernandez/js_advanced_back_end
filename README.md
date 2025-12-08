# 🛠️ Panel Administrativo – Backend

## 📌 Descripción General

Este proyecto backend está construido con **Node.js**, **Express** y **MongoDB**.  
Proporciona la lógica y API para el **Panel Administrativo**, incluyendo:

- Autenticación y autorización de administradores  
- Gestión de usuarios (CRUD)  
- Manejo seguro de contraseñas con **bcrypt**  
- Tokens de acceso y refresh tokens con **jsonwebtoken**  
- Conexión y operaciones con MongoDB mediante **Mongoose**  
- Organización de rutas con **Express Router**

---

## 🚀 Tecnologías Utilizadas

- **Node.js** – Entorno de ejecución de JavaScript en el servidor  
- **Express** – Framework web para crear la API REST  
- **MongoDB** – Base de datos NoSQL  
- **Mongoose** – ODM para modelar y consultar MongoDB  
- **bcrypt** – Para el hashing seguro de contraseñas  
- **jsonwebtoken (JWT)** – Para la autenticación basada en tokens  
- **dotenv** – Para manejar variables de entorno  
- **cors** – Para permitir peticiones desde el frontend

# IMPORTANTE!
### hay un endpoint que es getAllUser/insert donde es un post que inserta 60 usuarios ya en la base de datos para que se pueda probar en local.
