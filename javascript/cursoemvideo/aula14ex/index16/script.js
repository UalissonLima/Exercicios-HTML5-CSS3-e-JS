function contar() {
    var inicio = document.getElementById('idinicio')
    var fim = document.getElementById('idfim')
    var passo = document.getElementById('idpasso')
    var resultado = document.getElementById('idresultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)  {
        resultado.innerHTML = 'ERRO! Falta valores!'
    }
    else {
        resultado.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (i < f) {
            for(var c = i; c <= f; c += p) {
                // contagem crescente
                resultado.innerHTML += `${c} \u{1f449}`
                resultado.style.display = 'inline-block'
                resultado.style.marginRight = 'auto'
            }
        }
        else {
            for(var c = i; c >= f; c -= p) {
                // contagem regressiva
                resultado.innerHTML += `${c} \u{1f449}`
                resultado.style.display = 'inline-block'
                resultado.style.marginRight = 'auto'
            }
        }
        resultado.innerHTML += `\u{1f3c1}`
        resultado.style.display = 'block'
        resultado.style.margin = 'auto'
    }
}