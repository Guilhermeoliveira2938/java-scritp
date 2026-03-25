var idade =65

console.log(`Você tem ${idade} anos, logo`)
if (idade < 16) {
    console.log('Não pode votar ainda')
} else if (idade >= 16 && idade < 18 || idade > 65){
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatorio')
}




/*          Forma completa de colocar if e else

                if (idade >= 16 && idade < 18) {
                    console.log('Voto opcional')
                } else {
                    console.log('Pode votar')
}*/