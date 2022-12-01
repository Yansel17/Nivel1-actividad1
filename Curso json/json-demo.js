let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 4000,
    "numLikes": 2000,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
};

//Conversion de un objeto tipo js a JSON

let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

//Conversion de una cadena de string tipo JSON a un objeto tipo js

let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

