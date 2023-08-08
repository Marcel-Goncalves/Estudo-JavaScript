function calcular() {
    let num1 = document.getElementById('entrada')
    let tab = document.getElementById('seltab')
    let res = document.getElementById('res')
    
    if (num1.value.length == 0) {
        window.alert('Impossivel contar digite um valor')
    }

    else {
        let contador = 0
        let digitado = Number(num1.value)
    tab.innerHTML = ''
    while (contador <= 10){
        let item = document.createElement('option')
        item.text = `${digitado} x ${contador} = ${digitado*contador}`
        item.value = `tab ${contador}`
        tab.appendChild(item)
        contador ++ }
    }
    
}
