let monto = 0
let error = false
let cuponUsuario = ''
let cuponPorcentaje = 0
let tagResult = HTMLElement

function htmlData() {
    const inputMonto = document.getElementById('inputMonto')
    monto = inputMonto.value
    const inputCupon = document.getElementById('inputCupon')
    cuponUsuario = inputCupon.value
    tagResult = document.getElementById('result')
}
function cupones(cupon){
    if (cupon === 'CODE') {
        cuponPorcentaje = 5; error = false
    } else if(cupon === 'CODE+') {
        cuponPorcentaje = 10; error = false
        error = false
    } else if(cupon === 'EXPERTCODE') {
        cuponPorcentaje = 15; error = false
    } else {
        error = true
    }
}
function calculate() {
    htmlData()
    cupones(cuponUsuario)
    if (error === true) {
        tagResult.innerText = 'Cupón Inválido, favor revisa tu cupón'
    } else {
        const resultado = (monto*(100-cuponPorcentaje))/100
        tagResult.innerText = ('Su monto total aplicado el descuento es de: ' + resultado)
    }
}