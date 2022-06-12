//Codigo del cuadrado

console.group ("Cuadrados");

console.log ("Hello World");
//const ladoCuadrado = 5;
//console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}


//console.log ("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


function areaCuadrado(lado){
    return lado * lado;
}
//console.log ("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd;

//Codigo del triángulo 
console.group ("Triángulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo  = 4;

//console.log(
   // "Los lados del triángulo miden: " 
    //+ ladoTriangulo1  
    //+  "cm, " 
    //+ ladoTriangulo2  
    //+  "cm, " 
    //+ baseTriangulo  
    //+  "cm "
    //);


    //const alturaTriangulo  = 5.5;
    //console.log ("La altura del triángulo es: " + alturaTriangulo + "cm");

    function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base;

    }

    //console.log ("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

    const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;

    function areaTriangulo(base, altura){
        return base * altura;

    }


    console.log ("El área del triángulo es: " + areaTriangulo + "cm^2");


    console.groupEnd();

    //código del círculo

    console.group ("Círculos");

    
    //radio

    const radioCirculo = 4;
    console.log ("El radio del circulo es: " + radioCirculo + " cm");


    //diámetro

    const diametroCirculo = radioCirculo * 2;
    console.log ("El diámetro del circulo es: " + diametroCirculo + " cm");

    
    //PI

    const PI = Math.PI;
    console.log ("PI es igual a: " + PI + " cm");



    //circunferencia

    const perimetroCirculo = diametroCirculo * PI;
    console.log ("El perímetro del circulo es: " + perimetroCirculo + " cm");



    //area

    const areaCirculo = (radioCirculo * radioCirculo) * PI;
    console.log ("El área del circulo es: " + areaCirculo + " cm^2");



    console.groupEnd();







