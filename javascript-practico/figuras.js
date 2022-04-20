// Código del cuadrado
console.group("Cuadrado");
    const ladoCuadrado = 5;

    function perimetroCuadrado(lado)    {return lado * 4;}
    function areaCuadrado(lado)         {return lado ** 2}

    console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");
    console.log("El perímetro del cuadrado es: " + perimetroCuadrado(ladoCuadrado) + " cm");
    console.log("El área del cuadrado es: " + areaCuadrado(ladoCuadrado) + " cm2");

console.groupEnd();

//Código del triángulo
console.group("Triángulo");
    const ladoTriangulo1 = 6;
    const ladoTriangulo2 = 6;
    const baseTriangulo = 4;
    const alturaTriangulo = 5.5;

    function perimetroTriangulo(lado1, lado2, base) {return lado1 + lado2 + base;}
    function areaTriangulo(base, altura)            {return (base * altura) / 2;}

    console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");
    console.log("El perímetro del triángulo es: " + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) + " cm");
    console.log("El área del triángulo es: " + areaTriangulo(baseTriangulo, alturaTriangulo) + " cm2");

console.groupEnd();

// Código del círculo
console.group("Círculo");
    const radioCirculo = 4;
    const PI = Math.PI;
    
    function diametroCirculo(radio)     {return radio * 2;}
    function perimetroCirculo(radio)    {return diametroCirculo(radio) * PI;}
    function areaCirculo(radio)         {return PI * (radio **2);}

    console.log("El radio del círculo miden: " + radioCirculo + " cm");
    console.log("El perímetro del círculo mide: " + perimetroCirculo(radioCirculo) + " cm");
    console.log("PI es: " + PI);
    console.log("El diámetro del círculo es: " + diametroCirculo(radioCirculo) + " cm");
    console.log("El área del círculo es: " + areaCirculo(radioCirculo) + " cm2");

console.groupEnd();

// Interacción con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value =  input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value =  input.value;

    const area = areaCuadrado(value);
    alert(area);
}