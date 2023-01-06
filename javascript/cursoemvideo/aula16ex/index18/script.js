var num = document.getElementById('idfnum')
var lista = document.getElementById('idflista')
var resultado = document.getElementById('idresultado')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
        resultado.style.color = 'black'
    } else {

        resultado.style.color = 'red'
        resultado.innerHTML = '<br>ERRO! Valor inválido ou já adicionado na lista.'
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        resultado.style.color = 'red'
        resultado.innerHTML = '<br>ERRO! Adicione valores antes de finalizar.'
    } else {
        valores.sort()
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        
        media = soma / total

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor foi ${menor}</p>`
        resultado.innerHTML += `<p>A soma de todos os números é ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos números foi ${media.toFixed(2)}.</p>`
    }
}
