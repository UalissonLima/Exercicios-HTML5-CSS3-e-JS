function carregar(){
    var msg = document.getElementById('divmsg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora > 4 && hora < 12) {
        //BOM DIA!
        img.src = "imagens/manha.jpg"
        document.body.style.backgroundColor = '#e2cd9f'
    }
    else if (hora >=12 && hora <= 18) {
        //BOA TARDE!
        img.src = "imagens/tarde.jpg"
        document.body.style.backgroundColor = '#b9846f'
    }
    else {
        //BOA NOITE!
        img.src = "imagens/noite.jpg"
        document.body.style.backgroundColor = '#515154'
    }
}