function verificar() {
    let pal = [
        document.getElementById("ipal1").value,
        document.getElementById("ipal2").value,
        document.getElementById("ipal3").value,
    ]

    let res = document.getElementById("resultado")
    res.innerHTML = "As palavras com mais letras são: "
    
    for(let pos in pal) {
        if (pal[pos].length >=7 &&  pal[pos].length <=15) {
            console.log(pal[pos])
            
            
            res.innerHTML += `${pal[pos]}, `
        }
    }
    
}