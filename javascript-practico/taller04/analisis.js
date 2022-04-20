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

// Helpers
function esPar(numero)  {return (numero % 2 === 0);}

// Calculadora de mediana

//Mediana General
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

const medianaGeneralCol =  medianaSalarios(salariosColSorted);

// Mediana del top 10%
//const arrayEjemplo = [0,1,2,3,4,5,6,7,8,9,10];
const spliceStart = (salariosColSorted.length * 90 / 100);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
    }
);