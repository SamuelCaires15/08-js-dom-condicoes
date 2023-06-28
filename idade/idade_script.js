function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    var fano = document.getElementById('txtano')
    res.style.textAlign = 'center'
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente de novo!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.padding = '8pt'
        if (fsex[0].checked) {
            gênero = 'macho'
            if (idade>=0 && idade < 10) {
                img.setAttribute('src', 'bebe_macho.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_macho.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem_adulto.jpg')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
            res.innerHTML = `Foi detectado um ${gênero} com ${idade} anos.`
        } else if (fsex[1].checked) {
            gênero = 'fêmea'
            if (idade>=0 && idade < 10) {
                img.setAttribute('src', 'bebe_femea.jpeg')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_femea.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher_adulta.jpeg')
            } else {
                img.setAttribute('src', 'idosa.jpeg')
            }
            res.innerHTML = `Foi detectada uma ${gênero} com ${idade} anos.`
        } res.appendChild(img)
    }
}