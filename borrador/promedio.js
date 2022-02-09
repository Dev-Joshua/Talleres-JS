const lista1 = [
  100,
  200,
  300,
  500,
];

// let sumaLista1 = 0;

// for (let i = 0; i < lista1.length; i++) { //SE USA EL CICLO FOR PARA ITERAR EL ARRAY
//   sumaLista1 = sumaLista1 + lista1[i]; 
// };

// const promedioLista1 = sumaLista1 / lista1.length;


function calcularMediaAritmetica(lista) { 
  // let sumaLista = 0;

  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i]; 
  // };
  const sumaLista = lista.reduce( //SE USA METODO REDUCE DEL ARRAY PARA ITERAR LOS ELEMENTOS.
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

