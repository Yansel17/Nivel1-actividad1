const http = require('http');
const { Server } = require('https');

const Servidor = http.createServer((req,res) => {
    console.log('===> res (respuesta)')
    
    res.setHeader('content-type','application/json');
    console.log(res.getHeader());
    res.end('Hola, mundo');
});

const puerto = 3000;

Servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
})