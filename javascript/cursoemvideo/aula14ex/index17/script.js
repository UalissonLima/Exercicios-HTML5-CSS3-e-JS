function gerarTabuada() {
    var numero = document.getElementById('idnumero')
    var resultado = document.getElementById('idresultado')
    var n = Number(numero.value)
    var c = 1

    resultado.innerHTML = ' '
    if (numero.value.length == 0) {
        resultado.innerHTML = 'ERRO! Digite um número!'
    }
    else {
        while (c != 11) {
            mult = n * c
            resultado.innerHTML += `${n} x ${c} = ${mult} <br>`
            c++
            resultado.style.textAlign = 'left'
        }
    }
}