/* ====== Exercícios de interpretação de código ====== */

// EXERCÍCIO 01:
// 10

// EXERCÍCIO 02:
// a:
    // 19   
    // 21
    // 23
    // 25
    // 27
    // 30

// b:
/* Poderia ser criado uma variável global iniciando com valor 0 e incrementando 1 dentro
do for
*/
// let i = 0
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
    
//     if (numero > 18) {
//         console.log(numero)
//         console.log("O índice desse elemento é: " + i)
//     }

//     i++
// }


// Desafio 1:
/*
0
00
000
0000
*/

/* ====== Exercícios de escrita de código ====== */

// EXERCÍCIO 3:
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novoArray = []
// let arrayStrings = []

// console.log("a- Valores do array original: ")
// for(let numero of array) {
//     console.log(numero)
// }

// console.log("b- Valores do array original dividios por 10: ")
// for(let numero of array) {
//     console.log( numero / 10 )
// }

// console.log("c- Criar novo array contendo os números pares do original: ")
// for(let numero of array) {
//     if( (numero % 2) === 0 ) {
//         novoArray.push(numero)
//     }
// }
// console.log(novoArray);

// console.log("d- Criar novo array contendo strings ... : ")
// let i = 0
// for(let numero of array) {
//     arrayStrings.push("O elemento de index " + i + " é: " + numero)
//     i++
// }
// console.log(arrayStrings)

// console.log("e- Imprimir maior e menos números contidos no array original : ")
// let valorMaximo = 100
// let valorMinimo = 22
// for(let numero of array) {
//     if(numero > valorMaximo) {
//         valorMaximo = numero
//     }

//     if(numero < valorMinimo) {
//         valorMinimo = numero
//     }
// }
// console.log("O maior número é " + valorMaximo + " e o menor é " + valorMinimo)


// DESAFIO 02:
// let numero = Number(prompt("Jogador 01 digite um número: "))
// console.log("Vamos jogar!")
// let chute
// let tentativas = 0

// while(numero !== chute) {
//     chute = Number(prompt("Jogador 02, chute um número: "))
//     console.log("O número chutado foi: " + chute)
//     if(chute > numero) {
//         console.log("Errou. O número escolhido é menor")
//     } else if(chute < numero) {
//         console.log("Errou. O número escolhido é maior")
//     }
//     tentativas++
// }

// console.log("Acertou !!")
// console.log("O número de tentativas foi: " + tentativas)


// DESAFIO 03:
let numero = Math.round(Math.random() * 100) 
console.log(numero)
console.log("Vamos jogar!")
let chute
let tentativas = 0

while(numero !== chute) {
    chute = Number(prompt("Jogador 02, chute um número de 0 a 100: "))
    console.log("O número chutado foi: " + chute)
    if(chute > numero) {
        console.log("Errou. O número escolhido é menor")
    } else if(chute < numero) {
        console.log("Errou. O número escolhido é maior")
    }
    tentativas++
}

console.log("Acertou !!")
console.log("O número de tentativas foi: " + tentativas)
/* a alteração desse desafio foi até que facil, a única dificuldade foi saber como
o Math.random funcionava para conseguir realizar a função desejada, mais consegui 
comentando o resto do código e deixanco somente a função e mais abaixo um console.log 
exibindo o valor da variável, os materiais da internet também ajudaram muito.
*/

