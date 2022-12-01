const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProductos) => {
    console.log(`Compra realizada por: $${total}!.`);
    console.log(`El numero de productos es de: #${numProductos}.`);
});

emisorProductos.emit('compra', 5000, 3);