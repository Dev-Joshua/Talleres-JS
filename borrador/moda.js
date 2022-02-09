const lista = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const listaCount = {}; //Se convertira la lista(array) en un objeto y se almacenara en esta variable;

lista.map(
  function (elemento) { //Vamos a buscar los elementos que se repiten. se van a sumar la cantidad de veces que se aparece el mismo elemento.
    if (listaCount[elemento]) {//listCunt guardara la cantidad de veces en un objeto. 
      // listaCount[elemento] = listaCount[elemento] + 1;
      listaCount[elemento] += 1; 
    } else {
      listaCount[elemento] = 1;
    }
  }
);



//Ahora se vuelve a convertir el objeto en un array y dentro de este ver cual es el elemento mas grande(mayor)
//a Object.entries se le pasa como argumento el objeto que se quiere convertir en array.
//La funcion .sort para iterar por cada uno de los elementos y encontrar la posicion en la lista(array) que tiene el numero mas grande en listaCount.
const listaArray = Object.entries(listaCount).sort(
  function (valorAcumulado, nuevoValor) {
    // if (valorAcumulado > nuevoValor) return 1;
    // if (valorAcumulado == nuevoValor) return 0;
    // if (valorAcumulado < nuevoValor) return -1;
    return valorAcumulado[1] - nuevoValor[1]; //Cuando el elemento A(valorAcumulado) sea mas grande que elemento B(nuevoValor) dara un numero positivo. La segunda resta da un cero, y si ElementoA es menor que elementoB dara -1 Negativo.
  }//Se ordenan mediante la segunda posicion de cada arrary[1] que tiene el valor repetitivo
); 

const moda = listaArray[listaArray.length -1];//La moda va a ser la ultima posicion de este array. -1 para que devuelva la ultima posicion con .length


function calcularModa () {
  
}