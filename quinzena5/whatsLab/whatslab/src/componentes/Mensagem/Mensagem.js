import React from 'react'
import styled from 'styled-components'

const DivisaoMensagem = styled.div`

` 

const ParagrafoUsuario = styled.p`

`
const ParagrafoMensagem = styled.p`

`

export class Mensagem extends React.Component {

    state = {

    }
        
    render()  {

        return (
            <DivisaoMensagem>
                
                <ParagrafoUsuario>{props.usuario}</ParagrafoUsuario>
                <ParagrafoMensagem>{props.mensagem}</ParagrafoMensagem>

            </DivisaoMensagem>
        )

    }
    

}