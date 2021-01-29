import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const BotaoIrParaLista = styled.button`

`

class Principal extends React.Component {
    state = {
        cadastrar: true
    }

    render () {

        return (
            <BotaoIrParaLista>Ir para a página da lista</BotaoIrParaLista>
        )
            
        
    }
}

export default Principal