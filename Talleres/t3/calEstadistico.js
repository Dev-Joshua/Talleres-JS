const promedio = document.getElementById("promedio");
const mediana = document.getElementById("mediana");
const moda = document.getElementById("moda");

const calcular = document.getElementById("calcular");
const clear = document.getElementById("clear");
const resultado = document.getElementById("resultado");
let selection = '';

const buttons = [
  {name: 'promedio', value: promedio},
  {name: 'mediana', value: mediana},
  {name: 'moda', value: moda},
];

clear.addEventListener('click', () => {
  const list = document.getElementById("InputValue");
  list.value = '';
})

function getList() {
  const list = document.getElementById("InputValue").value;
  let numbers = list.toString().split(",").map((value) => parseInt(value));
  
  return numbers;
}

function active(btn) {
  buttons.forEach((element) => {
    element.value === btn
    ? element.value.classList.add('active') : element.value.classList.remove('active');
  })
}


//----------------------------------------------------------------------------------------------------
//PROMEDIO

function calcularPromedio (numbers) {
  let sumaTotal = numbers.reduce((valorAcumulado, nuevoElemento) => valorAcumulado + nuevoElemento);
  let promedio = sumaTotal / numbers.length;

  return promedio;
}

promedio.addEventListener('click', (evento) => {
  const option = evento.target.dataset.option;
  selection = option;
  active(promedio);
})


//MEDIANA

const esPar = (numero) => {
  if(numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediana (numbers) {
  let elemento1 = numbers[parseInt((numbers.length) / 2)];
  let elemento2 = numbers[parseInt((numbers.length) / 2) - 1];


  if(esPar(numbers.length)) {
    return calcularPromedio([elemento1, elemento2]);
  } else {
    return elemento1;
  }
}

mediana.addEventListener('click', (evento) => {
  const option = evento.target.dataset.option;
  selection = option
  active(mediana);
})


// ---------------------------------------------------------------------------
// MODA

function calcularModa(numbers) {
  const array = [];
  numbers.map((a, index) => {
    array[index] = [a, 0]
    numbers.map((b) => {
      a === b
        ? array[index][1] += 1
        : console.log(' ');
    })
  })
  return array.sort((a, b) => a[1] - b[1]).pop()
}

moda.addEventListener('click', (ev) => {
  const option = ev.target.dataset.option;
  selection = option
  active(moda)
})




// ---------------------------------------------------------------------------

function calcularOperacion(opc) {
  let numbers = getList()
  if (opc === 'promedio') {
    let result = calcularPromedio(numbers)
    resultado.innerText = `El promedio es: ${result.toFixed(2)}`
  }
  else if (opc === 'mediana') {
    let numbersInOrder = numbers.sort((a, b) => a - b)
    let result = calcularMediana(numbersInOrder)
    resultado.innerText = `La mediana es: ${result.toFixed(2)}`
  }
  else if (opc === 'moda') {
    let result = calcularModa(numbers)
    resultado.innerText = `La moda es: ${result[0]}`
  }
}


calcular.addEventListener('click', () => {
  let opcion = buttons.find((e) => e.name === selection)
  console.log(opcion);
  if (opcion) {
    calcularOperacion(opcion.name)
  }
  else {
    alert('Oops, debe seleccionar una operación 😬')
  }
})