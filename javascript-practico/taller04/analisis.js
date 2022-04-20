const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salarioA, salarioB) {
        return salarioA[1] - salarioB[1];
    }
);

function esPar(numero)  {return (numero % 2 === 0);}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    let personaMitad;

    if (esPar(lista.length)) {
        personaMitad = (lista[mitad] + lista[mitad - 1])/2;
        return personaMitad;
    }
    else{
        personaMitad = lista[mitad];
        return personaMitad;
    }
}

console.log(
    medianaSalarios(salariosColSorted)
);