function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 18){
                //jovem
                img.setAttribute('src','gokuJovem.png')
            } else if  (idade < 50) {
                //adulto
                img.setAttribute('src','vegittaAdulto.png')
            }
            else {
                //idoso
                img.setAttribute('src','Mestre-Kame-Férias-PNG.png')
            }

       } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade <18) {
            //jovem
            img.setAttribute('src','bulmaJovem.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src','androidAdulta.png')
        }
        else {
            //idosa
            img.setAttribute('src','bulmaIdosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
    res.appendChild(img)
    }
}