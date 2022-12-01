const estatusPedido = () => {
    return Math.random() < 0.5;
}

// for (let i = 0 ; i < 10 ; i++){
//     console.log(estatusPedido());
// }

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()){
            resolve('Pedido aprovado!.');
        }else{
            reject('Pedido rechazado!.');
        }
    }, 2000)
});

//Forma #1

// const manejarPedidoAprovado = (pedidoAprovado) => {
// console.log(pedidoAprovado);
// }

// const manejarPedidoRechazado = (pedidoRechazado) => {
//     console.log(pedidoRechazado);
// }

// miPromesa.then(manejarPedidoAprovado, manejarPedidoRechazado);


//Forma #2

// miPromesa.then((mensajeDeConfirmación) => {
//     console.log(mensajeDeConfirmación)
// });

// miPromesa.then(null,(mensajeDeRechazo) => {
//     console.log(mensajeDeRechazo)
// });

//Forma #3


// miPromesa
// .then((mensajeDeConfirmación) => {
//     console.log(mensajeDeConfirmación)
// })
// .catch((mensajeDeRechazo) => {
//     console.log(mensajeDeRechazo)
// });


//Forma #4


// const manejarPedidoAprovado = (mensajeAprovado) => {
//     console.log(mensajeAprovado);
// }
// const manejarPedidoRechazado = (mensajeRechazado) => {
//         console.log(mensajeRechazado);
// }
// miPromesa
// .then(manejarPedidoAprovado)
// .catch(manejarPedidoRechazado);
