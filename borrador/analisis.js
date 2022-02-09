//PASOS PARA LOGRAR SUPERAR UN RETO DE PROGRAMACION:

// 1. Plantea muy detalladamente el problema/análisis/cálculo/hipótesis que quieres resolver.
// 2. Encuentra las fórmulas necesarias para resolver el dilema que seleccionaste.
// 3. Define las variables y funciones para resolver tus fórmulas.
// 4. Presenta los resultados de tu informe en una página web dinámica usando HTML, CSS y JavaScript.
// 5. Organiza y documenta tu código para que sea más fácil de leer y entender.
// 6. Publícalo en tu repositorio de GitHub y muéstranos el link en la sección de comentarios.


///-------------------------------------------------------------------------------------------------------------------------
//Se creara el analisis, la mediana, la media, el promedio, el top 10%

//FUNCIONES HELPERS
function esPar(numero) { //Para calcular la mediana se debe saber si la cantidad del array es par o inpar
  if(numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediaAritmetica(lista) { 
  const sumaLista = lista.reduce( //SE USA METODO REDUCE RECIBIRA COMO ARGUMENTO UNA FUNCION Y ESTE METODO SUMARA CADA UNO DE LOS ELEMENTOS, EL PRIMERO CON EL 2 + EL 3, ETC. 
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}


//CALCULADORA DE MEDIANA
function medianaSalarios (lista) {
  const mitad = parseInt(lista.length / 2);// Se saca la mitad de la lista para entrar a la posicion media de la lista

  if (esPar(lista.length)) {//Si es par se saca el promedio entre los dos elementos de la lista(array.)
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
    return mediana;
  } else { //Si es inpar se escoge la posicion de la mitad dentro del array.
    const personaMitad = lista[mitad];
    return personaMitad;
  }
};


//MEDIANA GENERAL
const salariosColombia = colombia.map( //Se usa map para iterar por cada uno de los eleementos dentro del array colombia.
  function (persona) { // Por cada iteracion la funcion va recibir una persona
    return persona.salario; //Por cada persona dentro de colombia aparecera el salario de cada una.
  }
);

const salariosColombiaOrdenados = salariosColombia.sort(//Se ordenan los salarios de menor a mayor en este array
  function (salarioA, salarioB) {
    return salarioA - salarioB;
  }
);

const medianaGeneralColombia = medianaSalarios(salariosColombiaOrdenados);


//MEDIANA DEL TOP 10%
const spliceStart = (salariosColombiaOrdenados.length * (100-20)) / 100;
const spliceCount = salariosColombiaOrdenados.length - spliceStart;

const salariosColombiaTop10 = salariosColombiaOrdenados.splice(
  spliceStart,
  spliceCount,
);

const medianaTop10Colombia = medianaSalarios(salariosColombiaTop10);

console.log({
  medianaGeneralColombia,
  medianaTop10Colombia,
});

