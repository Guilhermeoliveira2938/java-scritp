function contar() {
    let ini = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let pas = document.getElementById('ipassos')
    let resultado = document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        resultado.innerHTML = 'Impossivel contar!'
        alert('[ERRO] verifique os campos novamente!')
    } else {
        resultado.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p <= 0) {
            alert('Passo invalido! Considerando PASSO 1')
        }

        if (i < f) {
            for(let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} &#X1F449;`
            }
            resultado.innerHTML += '&#X1F3C1'
        } else {
            for(let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} &#X1F449;`
            }
            resultado.innerHTML += '&#X1F3C1'
        }
    }
}

