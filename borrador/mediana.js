// function calcularMediaAritmetica(lista) { 
//   const sumaLista = lista.reduce( //SE USA METODO REDUCE DEL ARRAY PARA ITERAR LOS ELEMENTOS.
//     function (valorAcumulado = 0, nuevoElemento) {
//       return valorAcumulado + nuevoElemento;
//     }
//   );

//   const promedioLista = sumaLista / lista.length;

//   return promedioLista;
// }



// const lista = [1020, 230, 550, 640000, 480];

function arrayNoEstavacio (lista) {
  if(lista.length != 0) {
    return true;
  } else {
    return false;
  }
}
function ordenarLista(lista) {
   lista.sort(function (a, b) {
    return a - b;
  });
  console.log(lista);
}

// const mitadLista = parseInt(lista.length / 2);

function arrayEsPar(lista) { //ESTA FUNCION DEBE DEVOLVERNOS TRUE SI EL NUMERO ES PAR Y FALSE SI ES INPAR
  if(lista % 2 === 0) { //SE SACA EL MODULO DE UNA DIVISION(%). SE DIVIDE EL NUMERO ENTRE 2, SI ES CERO EL NUMERO ES PAR. 
    return true; 
  }
  if(!lista % 2 === 0) { //SI EL NUMERO NO ES CERO ES FALSE. SERIA INPAR
    return false; 
  }
}


// let mediana;

// if (esPar(lista.length)) {//EN ESTA CONDICIONAL SE LLAMA A LA FUNCION esPar(SI LA CANTIDAD DE LA LISTA ES PAR O INPAR)
//   const elemento1 = lista[mitadLista - 1]; //DENTRO DE LISTA1 BUSQUE EL ELEMENTO ANTERIOR A LA MITADLISTA1
//   const elemento2 = lista[mitadLista];

//   const promedioElementos1Y2 = calcularMediaAritmetica([
//     elemento1,
//     elemento2,
//   ]);

//   mediana = promedioElementos1Y2;
// } else {
//   mediana = lista[mitadLista]; // MEDIANA ES IGUAL A LA POSICION MITAD DE LA LISTA;
// }

// if(lista1 es par?) { //validamos si el total de elementos de la lista es numero par o impar.
//   //SI ES PAR ENTONCES necesitamos dos elementos
//     ->de esos dos elementos se saca el promedio 
//     ->el promedio va a a ser la mediana
//   } else {//SI LA CANTIDAD DE ELEMENTOS EN LA LISTA ES IMPAR
//     //LA POSICION DE MITADLISTA DENTRO DE LISTA1 ES MI MEDIANA
//     //->mediana
//   }

//FUNCION PRINCIPAL:
function calcularMediana (lista) { 
  if(arrayNoEstavacio(lista)) {//SI SE CUMPLE ESTA CONDICION PASA A EJECUTAR SI ARRAYESPAR. 
    if (arrayEsPar(lista.length)) {//SE TOMA LA CANTIDAD DE ELEMENTOS DE LA LISTA PARA VERIFICAR CON LA FUNCION SI EL TOTAL ES PAR O INPAR

      ordenarLista(lista);
      
      const posicionMedia = parseInt(lista.length / 2); //Se toma la cantidad de elementos total de la lista y se divide en 2
      const elemento1 = lista[posicionMedia - 1];
      const elemento2 = lista[posicionMedia];

      mediana = (elemento1 + elemento2)/2;
      return mediana;

    } else {//SI ES INPAR SE EJECUTA LA SIGUIENTE CONDICION
      if(lista.length > 1) { //SI ES INPAR, OSEA EL RESIDUO ES MAYOR QUE 1 SE EJECUTA ESTA CONDICIONAL
        ordenarLista(lista);
      }
      
      const posicionMedia = parseInt(lista.length / 2);
      const mediana = lista[posicionMedia];
      return mediana;
    }
  } else {//SI EL ARRAY ESTA VACIO SE RETORNA ESTO
    return "No hay elementos dentro de la lista"
  }
}