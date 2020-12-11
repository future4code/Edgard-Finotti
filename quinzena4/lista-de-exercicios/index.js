
// const exerciciosInterpretacaoCodigo01 = () => {
//     /*
//     "R$" + ( 100 * cotacao que o usuário digitar ao rodar a função. )
//     */
// }

// const exerciciosInterpretacaoCodigo02 = () => {
//     /*
//     165
//     Alerta "TIPO DE INVESTIMENTO INFORMADO INCORRETO !"
//     */
// }

// const exerciciosInterpretacaoCodigo03 = () => {
//     /*
//     Quantidade total de números 14
//     06
//     08
//     */
// }

// const exerciciosInterpretacaoCodigo04 = () => {
//     /*
//     -10
//     1590
//     */
// }

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

// const exerciciosLogicaProgramacao02 = () => {
//     /*
//     a- false
//     b- false
//     c- true
//     d- true
//     e- true
//     */
// }

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

const exerciciosLogicaProgramacao04 = (a, b, c) => {
    if( (a === b) && (a === c) && (b === c) ) {
        return "Equilátero"
    } else if( (a === b) || (a === c) || (b === c) ) {
        return "Isósceles"
    } else if ( (a !== b) && (a !== c) && (b !== c)) {
        return "Escaleno"
    }
}

console.log(exerciciosLogicaProgramacao04(10, 30, 20))
console.log(exerciciosLogicaProgramacao04(25, 25, 25))
console.log(exerciciosLogicaProgramacao04(30, 35, 40))

