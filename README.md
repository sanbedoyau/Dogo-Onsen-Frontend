## Integrantes
- Luis Montoya
- Juliana Bedoya
- Santiago Bedoya
- Jeronimo Salazar

## Acerca del proyecto
Esta es una página web de un balneario japonés inspirado en la película el viaje de Chihiro.

## Requisitos
- [Node.js](https://nodejs.org/en)
- `npm`

## Instalación

1. Clonar el repositorio

- git clone https://github.com/sanbedoyau/Dogo-Onsen-Frontend.git 
- cd Dogo-Onsen-Frontend

2. Crear archivo .env en el backend
Crear el archivo .env dentro de la carpeta back/ con el siguiente contenido:

- JWT_SECRET=supersecreto123  # CAMBIAR POR CUALQUIER COSA
- PORT=4000

3. Crear archivo .env en el frontend
Crear el archivo .env dentro de la carpeta front/ con el siguiente contenido:

- VITE_API_URL=http://localhost:4000

4. Instalar dependencias y configurar backend

- cd back/
- npm install
- npx prisma migrate dev --name init
- npx prisma generate

5. Insertar datos en la base de datos

- npx tsx scripts/seed.ts

6. Levantar el servidor del backend

- npm run dev

7. Instalar dependencias y levantar el frontend
Desde otra terminal:

- cd front/
- npm install
- npm run dev


## Usuarios disponibles luego de correr el script de seed
- admin@gmail.com / 1234
- user@gmail.com / 1234