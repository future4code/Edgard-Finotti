
// const exerciciosInterpretacaoCodigo01 = () => {
//     /*
//     "R$" + ( 100 * cotacao que o usuário digitar ao rodar a função. )
//     */
// }

/* ============================================================================================ */

// const exerciciosInterpretacaoCodigo02 = () => {
//     /*
//     165
//     Alerta "TIPO DE INVESTIMENTO INFORMADO INCORRETO !"
//     */
// }

/* ============================================================================================ */

// const exerciciosInterpretacaoCodigo03 = () => {
//     /*
//     Quantidade total de números 14
//     06
//     08
//     */
// }

/* ============================================================================================ */


// const exerciciosInterpretacaoCodigo04 = () => {
//     /*
//     -10
//     1590
//     */
// }

/* ============================================================================================ */

// const exerciciosLogicaProgramacao01 = () => {
//    const pokemons = ["Bulbasaur", "Bellsprout","Charmander", "Squirtle", "Vulpix", "Psyduck"]

//     //for(let pokemon of pokemons){
//     //console.log(pokemon)
//     //}

//     // let contador = 0;
//     // while(contador !== pokemons.length) {
//     //     console.log(pokemons[contador])
//     //     contador++
//     // }

//     pokemons.forEach((pokemon) => {
//         console.log(pokemon)
//     })

// }

// exerciciosLogicaProgramacao01()

/* ============================================================================================ */

// const exerciciosLogicaProgramacao02 = () => {
//     /*
//     a- false
//     b- false
//     c- true
//     d- true
//     e- true
//     */
// }

/* ============================================================================================ */

// const exerciciosLogicaProgramacao03 = () => {
//     const quantidadeDeNumerosPares = 10
//     let i = 0
//     while(i < quantidadeDeNumerosPares) {
//     console.log(i*2)
//     i++
//     }

//     /* não vai funcionar porque o valor de incremento i nao está sendo incrementado; 
//     e o incremento inicia com 0 e vai executa até ele ser menor ou igual quando por começar por 0 tem que ser somente menor.
//     */
// }

// exerciciosLogicaProgramacao03()

/* ============================================================================================ */

// const exerciciosLogicaProgramacao04 = (a, b, c) => {
//     if( (a === b) && (a === c) && (b === c) ) {
//         return "Equilátero"
//     } else if( (a === b) || (a === c) || (b === c) ) {
//         return "Isósceles"
//     } else if ( (a !== b) && (a !== c) && (b !== c)) {
//         return "Escaleno"
//     }
// }

// console.log(exerciciosLogicaProgramacao04(10, 30, 20))
// console.log(exerciciosLogicaProgramacao04(25, 25, 25))
// console.log(exerciciosLogicaProgramacao04(30, 35, 40))

/* ============================================================================================ */

// const exerciciosLogicaProgramacao05 = (num1, num2) => {

//     const maior = verificaMaiorNumero(num1, num2)

//     const objDivisão = verificaDivisaoEntreNumeros(num1, num2)

//     const diferenca = verificaDiferencaEntreNumeros(num1, num2)
    
//     exibeResultados(maior, objDivisão, diferenca)

// }

// const verificaMaiorNumero = (num1, num2) => {
    
//     if(num1 > num2) {
//         return `O maior é: ${num1}`
//     } else if (num1 < num2) {
//         return `O maior é: ${num2}`
//     }
// }

// const verificaDivisaoEntreNumeros = (primeiroNumero, segundoNumero) => {
    
//     let divisivelNum1porNum2 = ""
//     if( (primeiroNumero % segundoNumero) === 0 ){
//         divisivelNum1porNum2 = `${primeiroNumero} é divisível por ${segundoNumero}`
//     } else {
//         divisivelNum1porNum2 = `${primeiroNumero} não é divisível por ${segundoNumero}`
//     }

//     let divisivelNum2porNum1 = ""
//     if( (segundoNumero % primeiroNumero) === 0 ){
//         divisivelNum2porNum1 = `${segundoNumero} é divisível por ${primeiroNumero}`
//     } else {
//         divisivelNum2porNum1 = `${segundoNumero} não é divisível por ${primeiroNumero}`
//     }

//     return {divisivelNum1porNum2, divisivelNum2porNum1}
// }

// const verificaDiferencaEntreNumeros = (num1, num2) => {
//     let diferenca = (num1 - num2) * -1
//     return diferenca
// }   


// const exibeResultados = (stringMaior, objetoDivisao, valorDiferenca) => {
//     console.log(stringMaior)
//     console.log(objetoDivisao.divisivelNum1porNum2)
//     console.log(objetoDivisao.divisivelNum2porNum1)
//     console.log(`A diferença entre eles é: ${valorDiferenca}`)
// }

// exerciciosLogicaProgramacao05(15, 30)


/* ============================================================================================ */

// const array = [10 , 95, 12 , 50, 3, 100, 30, 93, 40, 90, 1, 5, 7]


// const exerciciosDeFuncoes01 = (arrayDeNumeros) => {
  
//     let maiorNumero = verificaMaiorNumero(arrayDeNumeros)
//     let menorNumero = verificaMenorNumero(arrayDeNumeros)

//     let segundoMaiorNumero = verificaSegundoMaiorNumero(maiorNumero, arrayDeNumeros)
//     let segundoMenorNumero = verificaSegundoMenorNumero(menorNumero, arrayDeNumeros)

//     imprimirResultado(segundoMaiorNumero, segundoMenorNumero)

// }

// const verificaMaiorNumero = (array) => {
//     let maior = -Infinity
    
//     for(let item of array){
       
//         if(item > maior ) {
//             maior = item
//         } 
//     }

//     return maior
// }

// const verificaMenorNumero = (array) => {
//     let menor = Infinity

//     for(let item of array){
       
//         if(item < menor ) {
//             menor = item
//         } 
//     }

//     return menor
// }

// const verificaSegundoMaiorNumero = (maiorNumeroArray, array) => {
//     let segundoMaior = 0
//     let maior = -Infinity

//     for(let item of array){
       
//         if( (item !== maiorNumeroArray) && (item > maior) ) {
//             segundoMaior = item
//             maior = item
//         } 
//     }
//     return segundoMaior
// }

// const verificaSegundoMenorNumero = (menorNumeroArray, array) => {
//     let segundoMenor = 0
//     let menor = Infinity

//     for(let item of array){
       
//         if((item !== menorNumeroArray) && (item < menor) ) {
//             segundoMenor = item
//             menor = item
//         } 
//     }
//     return segundoMenor
// }

// const imprimirResultado = (segundoMaior, segundoMenor) => {
//     console.log(`O segundo maior numero é: ${segundoMaior}` )
//     console.log(`O segundo menor numero é: ${segundoMenor}` )
// }

// exerciciosDeFuncoes01(array)


/* ============================================================================================ */

// const exerciciosDeFuncoes02 = () => {
//     exibirAlerta()
// }

// const exibirAlerta = () => {
//     alert("Hello Future4")
// }

// exerciciosDeFuncoes02()

/* ============================================================================================ */

// const exerciciosDeObjetos01 = () => {
//     /*
//     Arrays são uma lista de dados, geralmente lista de coisas do mesmo tipo. Pode ser utilizado para agrupar um conjunto de informações como um array de numeros ou nomes.
//     Objeto são um conjunto de valores e propriedades agrupados. Pode ser utilizado em um conjunto de informações que necessite ter propriedades e valores, como objeto de produtos que tem seu
//     nome, tipo, valor, descrição e quantidade e seus respectivos valores.
//     */
// }

/* ============================================================================================ */

const exerciciosDeObjetos02 = () => {
    
    const objetoRetangulo = criaRetangulo(30, 40)

    exibirResultadosRetangulo(objetoRetangulo)
    
}

const criaRetangulo = (lado1, lado2) => {
    
    const objeto = {
        largura: lado1,
        altura: lado2,
        perimetro: (2 * (lado1 + lado2)),
        area: lado1 * lado2
    }

    return objeto
}
const exibirResultadosRetangulo = (objeto) => {
    console.log(`Largura: ${objeto.largura}`)
    console.log(`Altura: ${objeto.altura}`)
    console.log(`Perímetro: ${objeto.perimetro}`)
    console.log(`Área: ${objeto.area}`)
}

exerciciosDeObjetos02()

/* ============================================================================================ */

