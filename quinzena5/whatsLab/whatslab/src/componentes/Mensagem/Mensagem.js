import React from 'react'
import styled from 'styled-components'

const ParagrafoMensagem = styled.p`
    
`

export class Mensagem extends React.Component {
    
    render()  {

        return (
            
            <ParagrafoMensagem><b>{this.props.usuario}</b> : {this.props.mensagem}</ParagrafoMensagem>
            
        )

    }
    
}