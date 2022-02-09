// const precioOriginal = 120;
// const descuento = 18;


// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100

// console.log({
  //   precioOriginal,
  //   descuento,
  //   porcentajePrecioConDescuento,
  //   precioConDescuento,
  // });
  
  
  
  function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
  }
  
  function onClickButtonPrice () {
    const price = parseInt(document.getElementById("InputPrice").value); //Se trae el valor que el usuario digito en el input HTML
    const discount = parseInt(document.getElementById("InputDiscount").value);

    const precioConDescuento = calcularPrecioConDescuento(price, discount); //Esta variable llama a la funcion que contiene la formula

    const resultP = document.getElementById("ResultPrice1");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento; //Con innertext podemos mostrar el resultado de la operacion en el HTML.
  }

  const coupons = [
    "Yo soy batman",
    "guarda el secreto",
    "te vigilo",
  ];

  function onClickButtonPriceCoupon () {
    const precio = document.getElementById("InputPrice2").value;
    const couponValue = document.getElementById("InputCoupon").value;

    let descuento;

    switch(true) {
      case couponValue === "yo soy batman":
        descuento = 15;
      break;
      case couponValue === "es un secreto":
        descuento = 35;
      break;
      case couponValue === "te vigilo":
        descuento = 25;
      break;
    }

    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
    
    const resultPrecio = document.getElementById("ResultPrice2");
    resultPrecio.innerText = "El precio es de $" + precioConDescuento + ", aplicando el siguiente cupon: " + couponValue;
  }