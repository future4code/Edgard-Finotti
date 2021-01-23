import React from 'react'
import styled from 'styled-components'

const DivisaoDigitarMensagens = styled.div`
    display: grid;
    grid-template-columns: 20% auto 07%;

    padding: 8px;
`

const InputUsuario = styled.input`
    padding: 8px;
    margin: 0 8px 0 2px;
    border-radius: 6px;
    border: none;
`

const InputMensagem = styled.input`
    padding: 8px;
    margin: 0 8px;
    border-radius: 6px;
    border: none;
`

const BotaoEnviarMensagem = styled.button`
    padding: 8px;
    border-radius: 6px;
    border: none;
    font-weight: bold;
    
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