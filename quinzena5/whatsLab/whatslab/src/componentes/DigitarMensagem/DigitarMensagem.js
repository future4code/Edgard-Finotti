import React from 'react'
import styled from 'styled-components'

const DivisaoDigitarMensagens = styled.div`
    display: grid;
    grid-template-columns: 20% auto 07%;
`

const InputUsuario = styled.input`
     
`

const InputMensagem = styled.input`
    
`

const BotaoEnviarMensagem = styled.button`

`

export class DigitarMensagem extends React.Component {

    state = {
        inputUsuario: "",
        inputMensagem: ""
    }

    onChangeInputUsuario = (event) => {
        this.setState({ inputUsuario: event.target.value})
    }

    onChangeInputMensagem = (event) => {
        this.setState({ inputMensagem: event.target.value})
    }

    enviarMensagem = () => {
        this.props.onClickEnviarMensagem(this.state.inputUsuario, this.state.inputMensagem)
    }

    render() {

        return( 
            <DivisaoDigitarMensagens>
                <InputUsuario type="text" value={this.state.inputUsuario} onChange={this.onChangeInputUsuario} placeholder="Usuário" />
                <InputMensagem type="text" value={this.state.inputMensagem} onChange={this.onChangeInputMensagem} placeholder="Mensagem" />
                <BotaoEnviarMensagem onClick={this.enviarMensagem}>Enviar</BotaoEnviarMensagem>
            </DivisaoDigitarMensagens>
        )
    }
}