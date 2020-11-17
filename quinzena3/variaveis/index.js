// ==== Exercicio01: ====
/* Vai ser impresso no console:
10 
10, 5
*/ 
// Observação: no enunciado está faltando definir se é let ou const !

// ==== Exercicio02: =====
/*
10, 10, 10
*/



// ==== Exercícios de escrita de código: ====

// 1:
// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
// let nome

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
// let idade

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
// console.log(typeof nome, typeof idade )

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// foi impresso undefined undefined, porque não foi identificado o tipo da variável pois não foi definido nenhum valor.

// d) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
// nome = prompt("Qual o seu nome ? ")
// idade = prompt("Qual a sua idade ? ")
// caso eu tivesse definido essas variáveis no começo como const, agora na hora de atribuir um valor a elas seria retornado erro;

// e) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
// console.log("Tipo da variável nome: ", typeof nome, "Tipo da variável idade : ", typeof idade)
// notei que mesmo entrando com números na variável "idade" é retornado tipo String.

// f) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu:
// console.log("Olá ", nome, " você tem " ,idade, " anos")


// 2:
// const nome = prompt("Qual o seu nome ? ")
// const sobrenome = prompt("Qual o seu sobrenome ? ")
// const idade = prompt("Qual a sua idade ? ")
// const cidade = prompt("Qual a cidade que você mora ? ")
// const profissao = prompt("Qual a sua profissão ? ")

// console.log("1. Qual o seu nome ?")
// console.log("Resposta: ", nome)

// console.log("2. Qual o seu sobrenome ?")
// console.log("Resposta: ", sobrenome)

// console.log("3. Qual a sua idade ?")
// console.log("Resposta: ", idade)

// console.log("4. Qual a cidade que você mora ?")
// console.log("Resposta: ", cidade)

// console.log("4. Qual a sua profissão ?")
// console.log("Resposta: ", profissao)

// 3:
// let comidasPreferidas = ["pizza", "macarrão", "lanche", "estrogonofe", "bife" ]
// a) Imprima na tela o array completo:
// console.log(comidasPreferidas)

// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra:
// console.log("Essas são as minhas comidas preferidas: ")
// console.log(comidasPreferidas[0])
// console.log(comidasPreferidas[1])
// console.log(comidasPreferidas[2])
// console.log(comidasPreferidas[3])
// console.log(comidasPreferidas[4])

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista:
// const comidaUsuario = prompt("Qual o sua comida preferida ? ")
// comidasPreferidas[1] = comidaUsuario
// console.log(comidasPreferidas)

// 4:
const arrayPerguntas = ["Você já jantou hoje ? ", "Você tomou café hoje ? ", "Você está com sono ?"]
const arrayRespostas = [ prompt(arrayPerguntas[0]), prompt(arrayPerguntas[1]), prompt(arrayPerguntas[2]) ]

console.log(arrayPerguntas[0], arrayRespostas[0])
console.log(arrayPerguntas[1], arrayRespostas[1])
console.log(arrayPerguntas[2], arrayRespostas[2])




