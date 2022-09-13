const array = [
    [27, 4, 20, 13, 14],  //Jogador 1
    [11, 15, 12, 8, 9],   //Jogador 2
    [5, 5, 12, 16, 4],    //Jogador 3
    [20, 33, 11, 12, 19], //Jogador 4
    [3, 3, 4, 5, 10]      //Jogador 5
]

// for(let i in array){
//     console.log(`Jogador ${Number(i)+1}: ${array[i]} `)
// }

for(let i in array){
    let jogador = `Jogador ${Number(i)+1}: `
    for(let j of array[i]){
        jogador += j + ", "
    }
    console.log(jogador)
}