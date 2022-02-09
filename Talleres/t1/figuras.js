//Codigo del cuadrado
console.group("Figura Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
  return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
function areaCuadrado (lado) {
  return lado * lado;
}

console.groupEnd();



//Codigo del triangulo
console.group("Figura Triángulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden: " 
// + ladoTriangulo1 
// + "cm, " 
// + ladoTriangulo2 
// + "cm, "
// + baseTriangulo 
// + "cm."
// );

// console.log("La altura del triangulo mide: " + alturaTriangulo + "cm.");

function perimetroTriangulo (lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// const areatriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areatriangulo + "cm^2");
function areaTriangulo (base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();



//Codigo del Circulo
console.group("Figura Circulo")

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es : " + radioCirculo + "cm");

//Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es : " + diametroCirculo + "cm");
function diametroCirculo (radio) {
  return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
// const perimetroCirculo = diametroCirculo * PI; //3.1415
// console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");
function perimetroCirculo (radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + "cm^2");
function areaCirculo (radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


console.group("Triangulo Isosceles")
//TRIANGULO ISÓSCELES
function hallarAltura (lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base) {
    // alert('Isósceles');
    return h = Math.sqrt((lado1 * lado2) - ((base * base)/4))
    //alert(h);
  } else {
    alert('No lo resolvi')
  }
}
// altura(6,6,2);
console.groupEnd();



const spanResultCuadrado = document.getElementById('resultadoCuadrado');
const spanResultTriangulo = document.getElementById('resultadoTriangulo')
const spanResultCirculo = document.getElementById('resultadoCirculo')
const spanResultTriIso = document.getElementById('resultadoTriIso')
//Desde aqui interactuamos con el HTML -----------------------------------------------------------------------------------------
//CUADRADO
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado")
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  // alert(perimetro);
  spanResultCuadrado.innerText = `El perimetro de su cuadrado es de ${perimetro}cm`
}

function calcularAreaCuadrado () {
  const input = document.getElementById("InputCuadrado")
  const value = input.value;

  const area = areaCuadrado(value);
  // alert(area);
  spanResultCuadrado.innerText = `El area de su cuadrado es de ${area}cm^2`
}

//TRIANGULO
function calcularPerimetroTriangulo() {
  const lado1 = parseInt(document.getElementById("InputTrianguloLado1").value);
  const lado2 = parseInt(document.getElementById("InputTrianguloLado2").value);
  const base = parseInt(document.getElementById("InputTrianguloBase").value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  // alert(perimetro);
  spanResultTriangulo.innerText = `El perimetro de su triangulo es de ${perimetro}cm`
}

function calcularAreaTriangulo () {
  const base = parseInt(document.getElementById("InputTrianguloBase").value);
  const altura = parseInt(document.getElementById("InputTrianguloAltura").value);

  const area = areaTriangulo(base, altura);
  // alert(area);
  spanResultTriangulo.innerText = `El area de su triangulo es de ${area}cm^2`
}


//CIRCULO
function calcularDiametroCirculo() {
  const input = document.getElementById("InputCirculo")
  const value = input.value;

  const diametro = diametroCirculo(value);
  // alert(diametro);
  spanResultCirculo.innerText = `El diametro de su circulo es de ${diametro}cm^2`
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo")
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  // alert(perimetro);
  spanResultCirculo.innerText = `El perimetro de su circulo es de ${perimetro}cm^2`
}

function calcularAreaCirculo () {
  const input = document.getElementById("InputCirculo")
  const value = input.value;

  const area = areaCirculo(value);
  // alert(area);
  spanResultCirculo.innerText = `El area de su circulo es de ${area}cm^2`
}

//TRIANGULO ISOSCELES
function calcularAlturaIsosceles () {
  const lado1 = parseInt(document.getElementById("InputLadoA").value);
  const lado2 = parseInt(document.getElementById("InputLadoB").value);
  const ladoBase = parseInt(document.getElementById("InputBase").value);

  const altura = hallarAltura(lado1, lado2, ladoBase);
  // alert(altura);
  spanResultTriIso.innerText = `La altura de su triangulo isosceles es de ${altura}cm`
}
