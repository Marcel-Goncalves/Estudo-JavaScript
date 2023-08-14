let num = [5,8,2,9,3]
num.sort()
num.push(1)
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[3]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
}
else{
console.log(`O valor está na posição ${pos}`)
}