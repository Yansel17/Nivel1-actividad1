const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res) => {
    let {method} = req;

    switch(method) {
        case 'GET': return manejarSolicitudGET(req, res);
        case 'POST': return manejarSolicitudGET(req, res);
        default: console.log(`el metodo no puede ser manejado por el servidor: ${method}.`);
    }
});

function manejarSolicitudGET(req, res) {
    const path = req.url;

    if(path === '/') {
        res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor y mi primera API creadas en Node.js');
    } else if (path === '/cursos') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
        res.statusCode = 501;
        console.log(`El metodo no puede se manejado por el servidor: ${method}.`);
    }
    
    res.statusCode = 404;
    
    res.end('El recurso solicitado no existe!');
    console.log(res.statusCode);
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;

    if (path === '/curso/programacion') {
        let cuerpo = '';
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            cuerpo = JSON.parse(cuerpo);

            res.end('El servidor recibio una solicitud POST para /cursos/programacion');
        });
    }

}

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}.`);
});