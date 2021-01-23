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
        inputMensagem: "",

        usuario: "",
        mensagem: ""
    }

    apertarEnter = (event) => {
        if(event.key === "Enter") {
            this.enviarMensagem()
        }
    } 
    
    onChangeInputUsuario = (event) => {
        // this.setState({ inputUsuario: event.target.value})
        this.setState({ usuario: event.target.value})
    }

    onChangeInputMensagem = (event) => {
        // this.setState({ inputMensagem: event.target.value})
        this.setState({ mensagem: event.target.value})
    }

    enviarMensagem = () => {
        this.setState({usuario: "", mensagem: "" })
        this.props.onClickEnviarMensagem(this.state.usuario, this.state.mensagem)
    }

    render() {

        return( 
            <DivisaoDigitarMensagens>
                <InputUsuario type="text" value={this.state.usuario} onChange={this.onChangeInputUsuario} placeholder="Usuário" />
                <InputMensagem type="text" value={this.state.mensagem} onChange={this.onChangeInputMensagem} placeholder="Mensagem"  onKeyDown={this.apertarEnter} />
                <BotaoEnviarMensagem onClick={this.enviarMensagem}>Enviar</BotaoEnviarMensagem>
            </DivisaoDigitarMensagens>
        )
    }
}