const buttonCalcular = document.getElementById('calcular')
const spanResult = document.getElementById('resultado')
const LIMIT = 40

buttonCalcular.addEventListener('click', () => {
  const salary = document.getElementById('InputIngresos').value
  const expenses = document.getElementById('InputGastos').value

  const resta = salary - expenses

  const capacidadcredito = ((LIMIT / 100) * resta).toFixed(2)
  console.log(capacidadcredito);

  spanResult.innerText = `Usted tiene una capacidad de endeudamiento de $${capacidadcredito}. Por lo tanto, puede asumir una deuda cuya cuota mensual no supere ese monto.`
})

