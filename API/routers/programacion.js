const express = require('express');

const {programacion} = require('../datos/cursos.js').infoCursos

const routerProgramacion = express.Router();

routerProgramacion.use(express.json());


routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion))   
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    if (resultados.length === 0){
        return res.status(402).send(`No se encontraron cursos de ${lenguaje}`)
    }

    if (req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    } else {
        res.send(resultados);
    }
});

// Cursos de programacion y niveles

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    
    if (resultados.length === 0) {
        return res.status(204).send(JSON.stringify(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`))
    } else {
        res.json(resultados);
    }
});

// POST
routerProgramacion.post('/', (req, res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(programacion);
});

// PUT
routerProgramacion.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id)

    if(indice >= 0) {
        programacion[indice] = cursoActualizado;
    } else {
        res.sendStatus(404);
    }
    res.send(programacion);
})

routerProgramacion.patch('/:id', (req, res) => {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        const cursoModificar = programacion[indice];
        Object.assign(cursoModificar, infoActualizada);
    } else {
        res.sendStatus(404);
    }
    res.send(JSON.stringify(programacion));
});

routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        programacion.splice(indice, 1);
    }else {
        res.sendStatus(404);
    }
    res.send(JSON.stringify(programacion));

})

module.exports = routerProgramacion;