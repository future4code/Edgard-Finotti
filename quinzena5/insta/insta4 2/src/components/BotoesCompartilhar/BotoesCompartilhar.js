import React from 'react'
import styled from 'styled-components'


/* ================ STYLED COMPONENTS: ================ */
const BotaoCompartilhar = styled.button`
    height: 80%;
`
const ImagemBotao = styled.img`
    height: 90%;
`

export function BotoesCompartilhar(props) {
    
    return <BotaoCompartilhar onClick={props.onClickButton}><ImagemBotao alt="Imagem-Compartilhar" src={props.imagem}></ImagemBotao></BotaoCompartilhar>
}