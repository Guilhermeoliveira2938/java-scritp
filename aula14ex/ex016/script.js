function contar() {
    let ini = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let pas = document.getElementById('ipassos')
    let resultado = document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[ERRO] verifique os campos novamente!')
    } else {
        resultado.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        for(let c = i; c <= f; c += p) {
            resultado.innerHTML += `${c} \ u(1F449)`
        }
    }
}