// ====== Exercícios de interpretação de código ======

// EXERCÍCIO 1:
    // a:
    // 10
    // 50

    // b:
    // acredito que não aparecerá nada no console;

// EXERCÍCIO 2:
    // a:
    // Darvas
    // Goli

    // b:
    // Amanda
    // Caio

// EXERCÍCIO 3:
/* a dunção de nome metodo recebe um array, dentro da função esse array é percorrido, cada item desse array é verificado se o resto da sua divisão por 2 é igual a 0.
Caso verdadeiro esse item do array é multiplicado por ele mesmo e adicionado em outro array de nome arrayFinal.
No final da função é retornado esse array de nome arrayFinal. 
*/
// Nome melhor para função: paresMultiplicados()


// ====== Exercícios de escrita de código ======

//EXERCÍCIO 4:
    // a:
    // const sobreMim = () => {
    //     console.log("Eu sou Edgard, tenho 34 anos, moro em Monte Mor e sou estudante.")
    // }

    // b:
    // let sobreMimDinamico = (nome, idade, cidade, estudante) => {
    //     if (estudante === true) {
    //        return  "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou estudante."
    //     } else {
    //        return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " ."
    //     }
    // }

    // const texto01 = sobreMimDinamico("Goli", 23, "São Paulo", true )
    // console.log(texto01)


//EXERCÍCIO 5:
    // a:
    // const somaNumeros = (numero01, numero02) => {
    //     const resultado = numero01 + numero02
    //     return resultado
    // }

    // const imprime = somaNumeros(100, 25)
    // console.log(imprime)

    // b:
    // const maiorOuIgual = (num1 , num2) => {
    //     if(num1 >= num2) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // }
    
    // const resultado = maiorOuIgual(10, 20)
    // console.log("O primeiro numero é maior ou igual ao segundo: ", resultado)

    // c:
    // const exibirMensagem = (mensagem) => {
    //     console.log(mensagem)
    // }

    // for(let i = 0; i < 10; i++) {
    //     exibirMensagem("Que calor !!!")
    // }

// EXERCÍCIO 6:
    // a:
    // const elementosArray = (array) => {
    //     const elementosArray = array.length

    //     return elementosArray
    // }    

    // const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    // console.log("Esse array possui " + elementosArray(array) + " elementos." )

    // b:
    // const numeroPar = (numero) => {
    //     if(numero % 2 === 0) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    // const num = 32
    // console.log("O numero " + num + " é par ? " + numeroPar(num) )

    // c:
    // const paresNumerosArray = (array) => {
    //     contador = 0
    //     for(let item of array) {
    //         if(item % 2 === 0) {
    //             contador++
    //         }
    //     }

    //     return contador
    // }

    // const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22, 11, 40]
    // console.log("Numeros pares do array [ " + array + " ] = " + paresNumerosArray(array) )

    //d:
    // const numeroPar = (numero) => {
    //     if(numero % 2 === 0) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    // const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22, 11, 40]

    // contador = 0
    // for ( let item of array ) {

    //     const retorno = numeroPar(item)

    //     if (retorno === true) {
    //         contador++
    //     } 

    // }

    // console.log("Numeros pares do array [ " + array + " ] = " + contador )

