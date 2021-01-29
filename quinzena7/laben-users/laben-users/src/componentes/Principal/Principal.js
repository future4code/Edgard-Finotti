import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CadastroUsuario from '../CadastroUsuario/CadastroUsuario'

const BotaoIrParaLista = styled.button`

`

class Principal extends React.Component {
    state = {
        cadastrar: true
    }

    render () {

        let componenteCadastroUsuario
        if(this.state.cadastrar) {
            componenteCadastroUsuario = <CadastroUsuario />
        }


        return (
            <div>
                <BotaoIrParaLista>Ir para a página da lista</BotaoIrParaLista>
                {componenteCadastroUsuario}
            </div>
            
        )
            
        
    }
}

export default Principal