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


 // MONTANDO O JOGO:


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
         // arrayCartasUsuario.push(cartaUsuario.texto)
         // pontuacao += cartaUsuario.valor
         cartasUsuario.push(cartaUsuario)
         pontuacaoUsuario += cartaUsuario.valor
      }

      // Cartas Computador:
      for(let i=0; i < 2 ; i++) {
         cartaComputador = comprarCarta()
         cartasComputador.push(cartaComputador)
         pontuacaoComputador += cartaComputador.valor
      }

      console.log("Usuário - cartas: " + cartasUsuario[0].texto + " " + cartasUsuario[1].texto + " - pontuação " + pontuacaoUsuario)
      console.log("Computador - cartas: " + cartasComputador[0].texto + " " + cartasComputador[1].texto + " - pontuação " + pontuacaoComputador)

      // Resultado no console:
      if(pontuacaoUsuario > pontuacaoComputador) {
         console.log("O usuário ganhou!")
      } else if (pontuacaoUsuario < pontuacaoComputador) {
         console.log("O computador ganhou!")
      } else {
         console.log("Empate!")
      }

      
   } else { 
      console.log("O jogo acabou !")
   }