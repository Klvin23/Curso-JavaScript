//Codigo del cuadrado

console.group ("Cuadrados");

console.log ("hello world");
const ladoCuadrado = 5;
console.log ("los lados del cuadrado miden: " + ladoCuadrado + "cm");


const perimetroCuadrado = ladoCuadrado * 4;
console.log ("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");


const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log ("el area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd;

//Codigo del triángulo 
console.group ("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo  = 4;

console.log(
    "los lados del triángulo miden: " 
    + ladoTriangulo1  
    +  "cm, " 
    + ladoTriangulo2  
    +  "cm, " 
    + baseTriangulo  
    +  "cm "
    );


    const alturaTriangulo  = 5.5;
    console.log ("la altura del triángulo es: " + alturaTriangulo + "cm");

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    console.log ("el perímetro del triángulo es: " + perimetroTriangulo + "cm");

    const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;
    console.log ("el área del triángulo es: " + areaTriangulo + "cm^2");


    console.groupEnd();

    //código del círculo

    console.group ("Círculos");

    
    //radio

    const radioCirculo = 4;
    console.log ("el radio del circulo es: " + radioCirculo + " cm");


    //diámetro

    const diametroCirculo = radioCirculo * 2;
    console.log ("el diámetro del circulo es: " + diametroCirculo + " cm");

    
    //PI

    const PI = Math.PI;
    console.log ("PI es igual a: " + PI + " cm");



    //circunferencia

    const perimetroCirculo = diametroCirculo * PI;
    console.log ("el perímetro del circulo es: " + perimetroCirculo + " cm");



    //area

    const areaCirculo = (radioCirculo * radioCirculo) * PI;
    console.log ("el área del circulo es: " + areaCirculo + " cm^2");



    console.groupEnd();







