const lista2 = [
    100,
    200,
    500,
    400000000,
];

const mitadLista2 = lista2.length / 2;
mediana=0;

if (esPar(lista2.length)) {
    mediana = parseInt((lista2[mitadLista2] + lista2[mitadLista2 - 1]) / 2 );
} else {
    mediana = lista2[parseInt(mitadLista2)];
} 

function esPar(numero)  {return numero % 2 === 0;}