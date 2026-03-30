function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('iano')
    var resultado = document.getElementById('resultado')

    if (Fano.value.length == 0 || Number(Fano.value) > ano) {
        alert("Verifique se os campos estao corretamente preenchidos")
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - (Fano.value)
        resultado.innerHTML = `Você tem ${idade} anos`

        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <=10) {
                //Criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 18) {
                // adolescente
                img.setAttribute('src', 'imagens/adoslecente-m.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
            }
            } else {
                genero =  'Mulher'
                if (idade >=0 && idade <=10) {
                    //Criança
                    img.setAttribute('src', 'imagens/menina.png')
                } else if (idade < 18) {
                    // adolescente
                    img.setAttribute('src', 'imagens/adolescente-f.png')
                } else if (idade < 50){
                    //adulto
                    img.setAttribute('src', 'imagens/adulta.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.appendChild(img)
        resultado.innerHTML += `<p>Detectamos ${genero} com ${idade} anos</p>`
    }
}