/* ======= EXERCÍCIO 01: ======= */
/* O código faz a verificação se o resto da divisão por 2 do número que o usuário digitou é
igual a 0 ou não.
Ele realiza teste se o número digitado é igual a 0 e imprime a mensagem "Passou no teste." 
se não for igual a 0 imprime a mensagem de "Não passou no teste."
Ele irá imprimir a mensagem de "Passou no teste" para todos os números pares.
A mensagem de "Não passou no teste " será para todos os números impares. 
*/

/* ======= EXERCÍCIO 02: ======= */
/*
a - O código serve para o usuário entrar com o nome de uma fruta, o código verifica o nome
da fruta, e de acordo com o nome guarda na variável preco o seu preço.
b- O preço da fruta Maçã é R$ 2.25
c- O preço da fruta Pêra é R$ 5
*/

/* ======= EXERCÍCIO 03: ======= */
/*
a- Está atribuindo uma infomração digitada pelo usuário, transformada em número, na variável
numero.
b- Caso numero digitado seja 10, mensagem no terminal = Esse número passou no teste.
Caso numero digitado seja -10, nenhuma mensagem será exibida, somente mensagme de erro sobre
a variável mensagem.
c- Sim, haverá mensagem que a variável mensagem não foi definida, porque essa variável foi
definida dentro do escopo do if e não foi retornada, e depois ela foi chamada fora do 
escopo do if.
*/

/* ======= EXERCÍCIO 04: ======= */
// const idade = Number(prompt("Digite a sua idade: "))

// if(idade >= 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir.")
// }

/* ======= EXERCÍCIO 05: ======= */
// const turno = prompt("Digite o seu turno (M (matutino) ou V (Vespertino) ou N (Noturno)):")

// if (turno === "M") {
//     console.log("Bom dia !")
// } else if (turno === "V") {
//     console.log("Boa tarde !")
// } else if (turno === "N") {
//     console.log("Boa noite !")
// } else {
//     console.log("Turno incorreto !")
// }

/* ======= EXERCÍCIO 06: ======= */
// const turno = prompt("Digite o seu turno (M (matutino) ou V (Vespertino) ou N (Noturno)):")

// switch (turno) {
//     case "M" :
//         console.log("Bom dia !")
//         break
//     case "V" :
//         console.log("Boa tarde !")
//         break
//     case "N" :
//         console.log("Boa noite !")
//         break
//     default:
//         console.log("Turno incorreto !")
//         break
// }

/* ======= EXERCÍCIO 07: ======= */
// const genero = prompt("Digite o gênero do filme: ")
// const valorIngresso = Number(prompt("Digite o valor do ingresso: "))

// if (genero === "fantasia" && valorIngresso < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }


/* ================= DESAFIOS: ================= */

/* ======= DESAFIO 01: ======= */
// const genero = prompt("Digite o gênero do filme: ")
// const valorIngresso = Number(prompt("Digite o valor do ingresso: "))

// if (genero === "fantasia" && valorIngresso < 15) {
//     console.log("Bom filme!")
    
//     const snack = prompt("Qual snack você vai comprar (pipoca, chocolate, doces, etc) ?)")
//     console.log("... com " + snack )

// } else {
//     console.log("Escolha outro filme :(")
// }

/* ======= DESAFIO 02: ======= */
const nome = prompt("Digite o seu nome ?")
const tipoJogo = prompt("Digite o tipo de jogo ( IN(Internacional), DO(Doméstico) )) ?")
const etapaJogo = prompt("Digite a etapa do jogo ( SF(Semi-Final), DT(Decisão de Terceiro lugar), FI(Final) )) ?")
const categoria = Number(prompt("Digite a categoria ( 1, 2, 3 ou 4 )"))
const qtdIngressos = Number(prompt("Digite a quantidade  de ingressos: "))

let valorIngresso
const cotacaoDolar = 4.10
let valorFinal

if (tipoJogo === "IN") {
    if (etapaJogo === "SF") {
        switch (categoria) {
            case 1 :
                valorIngresso = 1320 / cotacaoDolar
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Internacional")
                console.log("Etapa do Jogo: Semi-Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos") 
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "U$ " + valorIngresso)
                console.log("Valor total: " + "U$ " + valorFinal)
                break
            case 2 :
                valorIngresso = 880 / cotacaoDolar
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Internacional")
                console.log("Etapa do Jogo: Semi-Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "U$ " + valorIngresso)
                console.log("Valor total: " + "U$ " + valorFinal)
                break    
            case 3 :
                valorIngresso = 550 / cotacaoDolar
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Internacional")
                console.log("Etapa do Jogo: Semi-Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "U$ " + valorIngresso)
                console.log("Valor total: " + "U$ " + valorFinal)
                break    
            case 4 :
                valorIngresso = 220 / cotacaoDolar
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Internacional")
                console.log("Etapa do Jogo: Semi-Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "U$ " + valorIngresso)
                console.log("Valor total: " + "U$ " + valorFinal)
                break    
        }
    } else if (etapaJogo === "DT") {
        switch (categoria) {
            case 1 :
                valorIngresso = 660 / cotacaoDolar
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Internacional")
                console.log("Etapa do Jogo: Decisão 3º Lugar")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "U$ " + valorIngresso)
                console.log("Valor total: " + "U$ " + valorFinal)
                break    
            case 2 :
                valorIngresso = 440 / cotacaoDolar
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Internacional")
                console.log("Etapa do Jogo: Decisão 3º Lugar")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "U$ " + valorIngresso)
                console.log("Valor total: " + "U$ " + valorFinal)
                break       
            case 3 :
                valorIngresso = 330 / cotacaoDolar
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Internacional")
                console.log("Etapa do Jogo: Decisão 3º Lugar")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "U$ " + valorIngresso)
                console.log("Valor total: " + "U$ " + valorFinal)
                break    
            case 4 :
                valorIngresso = 170 / cotacaoDolar
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Internacional")
                console.log("Etapa do Jogo: Decisão 3º Lugar")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "U$ " + valorIngresso)
                console.log("Valor total: " + "U$ " + valorFinal)
                break    
        }
    } else if (etapaJogo === "FI") {
        switch (categoria) {
            case 1 :
                valorIngresso = 1980 / cotacaoDolar
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Internacional")
                console.log("Etapa do Jogo: Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "U$ " + valorIngresso)
                console.log("Valor total: " + "U$ " + valorFinal)
                break    
            case 2 :
                valorIngresso = 1320 / cotacaoDolar 
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Internacional")
                console.log("Etapa do Jogo: Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "U$ " + valorIngresso)
                console.log("Valor total: " + "U$ " + valorFinal)
                break       
            case 3 :
                valorIngresso = 880 / cotacaoDolar
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Internacional")
                console.log("Etapa do Jogo: Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "U$ " + valorIngresso)
                console.log("Valor total: " + "U$ " + valorFinal)
                break    
            case 4 :
                valorIngresso = 330 / cotacaoDolar
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Internacional")
                console.log("Etapa do Jogo: Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "U$ " + valorIngresso)
                console.log("Valor total: " + "U$ " + valorFinal)
                break    
        }
    } else {
        console.log("Etapa do jogo inválida !")
    }
} else if (tipoJogo === "DO") {
    if (etapaJogo === "SF") {
        switch (categoria) {
            case 1 :
                valorIngresso = 1320
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Nacional")
                console.log("Etapa do Jogo: Semi-Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos") 
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "R$ " + valorIngresso)
                console.log("Valor total: " + "R$ " + valorFinal)
                break
            case 2 :
                valorIngresso = 880
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Nacional")
                console.log("Etapa do Jogo: Semi-Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos") 
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "R$ " + valorIngresso)
                console.log("Valor total: " + "R$ " + valorFinal)
                break    
            case 3 :
                valorIngresso = 550
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Nacional")
                console.log("Etapa do Jogo: Semi-Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos") 
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "R$ " + valorIngresso)
                console.log("Valor total: " + "R$ " + valorFinal)
                break    
            case 4 :
                valorIngresso = 220
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Nacional")
                console.log("Etapa do Jogo: Semi-Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "R$ " + valorIngresso)
                console.log("Valor total: " + "R$ " + valorFinal)
                break    
        }
    } else if (etapaJogo === "DT") {
        switch (categoria) {
            case 1 :
                valorIngresso = 660
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Nacional")
                console.log("Etapa do Jogo: Decisão 3º Lugar")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "R$ " + valorIngresso)
                console.log("Valor total: " + "R$ " + valorFinal)
                break    
            case 2 : 
                valorIngresso = 440
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Nacional")
                console.log("Etapa do Jogo: Decisão 3º Lugar")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "R$ " + valorIngresso)
                console.log("Valor total: " + "R$ " + valorFinal)
                break       
            case 3 :
                valorIngresso = 330
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Nacional")
                console.log("Etapa do Jogo: Decisão 3º Lugar")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "R$ " + valorIngresso)
                console.log("Valor total: " + "R$ " + valorFinal)
                break    
            case 4 :
                valorIngresso = 170
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Nacional")
                console.log("Etapa do Jogo: Decisão 3º Lugar")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "R$ " + valorIngresso)
                console.log("Valor total: " + "R$ " + valorFinal)
                break    
        }
    } else if (etapaJogo === "FI") {
        switch (categoria) {
            case 1 :
                valorIngresso = 1980
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Nacional")
                console.log("Etapa do Jogo: Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "R$ " + valorIngresso)
                console.log("Valor total: " + "R$ " + valorFinal)
                break    
            case 2 :
                valorIngresso = 1320
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Nacional")
                console.log("Etapa do Jogo: Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "R$ " + valorIngresso)
                console.log("Valor total: " + "R$ " + valorFinal)
                break       
            case 3 :
                valorIngresso = 880
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Nacional")
                console.log("Etapa do Jogo: Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "R$ " + valorIngresso)
                console.log("Valor total: " + "R$ " + valorFinal)
                break    
            case 4 :
                valorIngresso = 330
                valorFinal = valorIngresso * qtdIngressos
                console.log("---Dados da Compra---")
                console.log("Nome do cliente: " + nome)
                console.log("Tipo do jogo: Nacional")
                console.log("Etapa do Jogo: Final")
                console.log("Categoria: " + categoria)
                console.log("Quantidade de ingressos: " + qtdIngressos + " ingressos")
                console.log("---Valores---")
                console.log("Valor do ingresso: " + "R$ " + valorIngresso)
                console.log("Valor total: " + "R$ " + valorFinal)
                break    
        }
    } else {
        console.log("Etapa do jogo inválida !")
    }
}