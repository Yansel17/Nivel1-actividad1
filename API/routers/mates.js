const express = require('express');
const routerMates = require('./programacion.js');
const {matematicas} = require('../datos/cursos.js').infoCursos;
routerMates.use(express.json())
const routerMates = express.Router();

routerMates.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema === tema);

    if (resultados.length === 0){
        return res.status(402).send(`No se encontraron cursos de ${tema}`)
    }

    res.send(JSON.stringify(resultados));
});

routerMates.get('/', (req, res) => {
    res.send(JSON.stringify(matematicas))
});


routerMates.post('/', (req, res) => {
    let cursoNuevo = req.body;
    matematicas.push(cursoNuevo);
    res.send(JSON.stringify(matematicas))    
});


module.exports = routerMates;