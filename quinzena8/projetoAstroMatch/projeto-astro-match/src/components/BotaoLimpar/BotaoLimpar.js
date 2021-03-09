import React from 'react'
import { DivisaoBotaoLimpar, Botao } from './stylesBotaoLimpar'

export function BotaoLimpar(props) {
    
    

    return (
        <DivisaoBotaoLimpar>
            <Botao onClick={props.onClick}>Limpar swipes e matches</Botao>
        </DivisaoBotaoLimpar>
        
    )
}