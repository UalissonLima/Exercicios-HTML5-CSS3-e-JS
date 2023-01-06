function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idano')
    var resultado = document.getElementById('idresultado')
    var foto = document.getElementById('foto')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO!')
    }
    else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                foto.src = 'imagens/foto-bebe-m.png'
            }
            else if (idade < 21){
                //Jovem
                foto.src = 'imagens/foto-jovem-m.png'
            }
            else if (idade < 50) {
                //Adulto
                foto.src = 'imagens/foto-adulto-m.png'
            }
            else {
                //Idoso
                foto.src = 'imagens/foto-idoso-m.png'
            }
        }

        else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                foto.src = 'imagens/foto-bebe-f.png'
            }
            else if (idade < 21){
                //Jovem
                foto.src = 'imagens/foto-jovem-f.png'
            }
            else if (idade < 50) {
                //Adulta
                foto.src = 'imagens/foto-adulto-f.png'
            }
            else {
                //Idosa
                foto.src = 'imagens/foto-idoso-f.png'
            }
        }
    resultado.innerHTML = `${genero} com ${idade} anos`
    }
}