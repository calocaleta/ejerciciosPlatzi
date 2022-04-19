// Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado ** 2;
console.log("El área del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

//Código del triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");

const perimetroTriangulo = ladoCuadrado * 4;
console.log("El perímetro del triángulo es: " + (ladoTriangulo1 + ladoTriangulo2 + baseTriangulo) + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + " cm2");
console.groupEnd();

// Código del círculo
console.group("Círculo");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
//const PI = 3.1415;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log("El radio del círculo miden: " + radioCirculo + " cm");

console.log("PI es: " + PI);

console.log("El diámetro del círculo es: " + diametroCirculo + " cm");

console.log("El área del círculo es: " + areaCirculo + " cm2");
console.groupEnd();

