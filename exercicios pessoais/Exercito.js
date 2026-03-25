var idade = 32

console.log(`Você tem ${idade} anos`)
if (idade < 17) {
    console.log('você não pode servir o exercito ainda')
} else if (idade >=17 && idade <= 22) {
    console.log('você é oficial de carreira!')
} else if (idade >=23 && idade <=24) {
    console.log('você é Sargento de carreira!')
} else if (idade >=25 && idade <= 26) {
    console.log('você pode ser Sargento de carreira ou pode ser Médico do exercito!')
} else if (idade >= 32 && idade <= 35) {
    console.log('você é Oficial Complementar!')
}