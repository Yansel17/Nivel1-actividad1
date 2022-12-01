
const PromesaCumplida = true;

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (PromesaCumplida)
        {
            resolve('Promesa cumplida!.');
        }
        else
        {
            reject('Promesa rechazada!...');
        }
    }, 3000);
});

const manejoPromesaCumplida = (valor) => {
    console.log(valor);
};

const manejoPromesaRechazada = (rechazo) => {
    console.log(rechazo);
}

miPromesa.then(manejoPromesaCumplida, manejoPromesaRechazada);
