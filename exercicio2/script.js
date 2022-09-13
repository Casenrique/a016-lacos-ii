let userInput = Number(prompt(`Digite o seu número da sorte.`))
const auxTabuada = [1,2,3,4,5,6,7,8,9,10]

for(let i in auxTabuada){
    console.log(`${userInput} x ${auxTabuada[i]} = ${userInput*auxTabuada[i]}`)
}