document.querySelector('#formulario').addEventListener('submit', (e) =>{    
  e.preventDefault();

  let nombreProducto = document.querySelector('#nombre')
  let precioProducto = document.querySelector('#precio')

  
  if(!/[^/w ñÑ_#]+$/.test(nombreProducto.value.trim())) errorDatos(nombreProducto)
  else if(!/(^[\d]+€?$)|(^[1][\d]*\.[\d]+€?$)/.test(precioProducto.value.trim())) errorDatos(precioProducto)
  else crearElementoTr(nombreProducto.value,precioProducto.value)

})

const errorDatos = (elementoHTML) => {
  let errorElement=document.createElement('error')
  errorElement.innerHTML = `'${elementoHTML.getAttribute('placeholder')}'${elementoHTML.parentElement.nextElementSibling.innerHTML}`
  elementoHTML.parentElement.appendChild(errorElement)

}

const crearTr=(name,price) => {
  let elBody = document.querySelector("#tbody")
  let elementoTr = document.createElement("tr")
  elementoTr.innerHTML=`<td>${name}</td><td>${price}</td>`
  elBody.append(elementoTr)
}
