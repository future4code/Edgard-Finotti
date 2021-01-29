import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const DivisaoCadastroUsuario = styled.div`
    border: 1px solid black;
`

const DivisaoDadosUsuario = styled.div`

`
const LabelNome = styled.label`

`

const InputNome = styled.input`

`

const LabelEmail = styled.label`

`

const InputEmail = styled.input`

`
const BotaoSalvar = styled.button`

`

class CadastroUsuario extends React.Component {
    state = {
        
    }

    render () {

        return (
            <DivisaoCadastroUsuario>
                <DivisaoDadosUsuario>
                    <LabelNome for="Nome">Nome:</LabelNome>
                    <InputNome type="text" id="Nome" name="Nome"></InputNome>

                    <LabelEmail for="Mail">O email:</LabelEmail>
                    <InputEmail type="email" id="Mail" name="Mail"></InputEmail>

                    <BotaoSalvar>Salvar</BotaoSalvar>
                </DivisaoDadosUsuario>
            </DivisaoCadastroUsuario>
        )
            
        
    }
}

export default CadastroUsuario