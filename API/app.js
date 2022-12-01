const express = require('express');
const app = express();
const {infoCursos} = require('./datos/cursos');

// Routers

const routerProgramacion = require('./routers/programacion');
app.use('/api/cursos/programacion', routerProgramacion);

// const routerMates = require('./routers/mates.js')
// app.use('/api/cursos/matematicas', routerMates);


app.get('/', (req, res) => {
res.send('Mi primer servidor con express. Cursos ☺.');
});

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
});