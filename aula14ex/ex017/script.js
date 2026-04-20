function GerarTabuada() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('itab')
    let valor = num.value

    if (!valor || valor.trim() === '') {
        alert('Digite um número para gerar a tabuada!')
    } else {
        let n = parseInt(valor, 10)
        let c = 1 
        tab.innerHTML = ""

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', GerarTabuada)
})