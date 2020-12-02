/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Bem vindo ao jogo de Blackjack !")
   
let cartaUsuario 
let cartasUsuario = []

let cartaComputador
let cartasComputador = []

let arrayCartasUsuario = []

let pontuacaoUsuario = 0
let pontuacaoComputador = 0

if (confirm("Quer iniciar uma nova rodada ?")) {
    
   // Cartas Usuário:
   for(let i=0; i < 2 ; i++) {
      cartaUsuario = comprarCarta()
      cartasUsuario.push(cartaUsuario)
      pontuacaoUsuario += cartaUsuario.valor
   }

   // Cartas Computador:
   for(let i=0; i < 2 ; i++) {
      cartaComputador = comprarCarta()
      cartasComputador.push(cartaComputador)
      pontuacaoComputador += cartaComputador.valor
   }
   

   // DESAFIO 08:
   //08. Computador
   let igualAsesComputador = 0

   for(let carta of cartasComputador) {

      let numeroCarta = carta.texto.slice(0, 1)
      
      if(numeroCarta === "A") {
         igualAsesComputador++
      } 
   }

   if(igualAsesComputador === cartasComputador.length){
      console.log("Necessário sortear as cartas novamente pois sairam dois ases (A) para o Computador.")
      

      cartasComputador = []
      for(let i=0; i < 2 ; i++) {
         cartaComputador = comprarCarta()
         cartasComputador.push(cartaComputador)
         pontuacaoComputador += cartaComputador.valor
      }
      
      console.log("Novas cartas Computador : " , cartasComputador)

   }

   //08. Usuário:
   let igualAsesUsuario = 0

   for(let carta of cartasUsuario) {

      let numeroCarta = carta.texto.slice(0, 1)
      
      if(numeroCarta === "A") {
         igualAsesUsuario++
      } 
   }

   if(igualAsesUsuario === cartasUsuario.length){
      console.log("Necessário sortear as cartas novamente pois sairam dois ases (A) para o Usuário.")
      

      cartasUsuario = []
      for(let i=0; i < 2 ; i++) {
         cartaUsuario = comprarCarta()
         cartasUsuario.push(cartaUsuario)
         pontuacaoUsuario += cartaUsuario.valor
      }

      console.log("Novas cartas Usuário : " , cartasUsuario)


   }


   // DESAFIO 09:
   let cartasNumerosUsuario = []
   for(carta of cartasUsuario) {
      cartasNumerosUsuario.push(carta.texto)
   }

   // DESAFIO 10:
   while(confirm("Suas cartas são " + cartasNumerosUsuario +  ". A carta revelada do computador é " + cartasComputador[0].texto + ".\n" + "Deseja comprar mais carta?" )) {

      if(pontuacaoUsuario <= 21 ) {
         cartaUsuario = comprarCarta()
         cartasUsuario.push(cartaUsuario)
         pontuacaoUsuario += cartaUsuario.valor
         
         cartasNumerosUsuario.push(cartaUsuario.texto)
      } else {
         break
      }

      
   } 

   // DESAFIO 11:
   let cartasNumerosComputador = []
   for(carta of cartasComputador) {
      cartasNumerosComputador.push(carta.texto)
   }
   
   while(pontuacaoComputador < pontuacaoUsuario ) {
      cartaComputador = comprarCarta()
      cartasComputador.push(cartaComputador)
      pontuacaoComputador += cartaComputador.valor

      cartasNumerosComputador.push(cartaComputador.texto)
   }


   console.log("Suas cartas são: " + cartasNumerosUsuario + " Sua pontuação é " + pontuacaoUsuario + ".")
   console.log("As cartas do computador são: " + cartasNumerosComputador + ". A pontuação do computador é "+ pontuacaoComputador)

   // DESAFIO 12:
   if(pontuacaoUsuario > 21) {
      console.log("O computador ganhou !!!")
   } else if (pontuacaoComputador > 21 && pontuacaoUsuario <= 21){
      console.log("O usuário ganhou !!!")
   } else if(pontuacaoUsuario === pontuacaoComputador) {
      console.log("Empate !!!")
   } else if(pontuacaoUsuario < 21 && pontuacaoUsuario < 21) { 
      if(pontuacaoUsuario > pontuacaoComputador){
         console.log("O usuário ganhou !!!")
      } else {
         console.log("O computador ganhou !!!")
      }
   }

    
} else { 
   console.log("O jogo acabou !")
}

