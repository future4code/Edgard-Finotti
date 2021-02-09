import React from 'react'
import axios from 'axios'
import {BotaoSalvar, DivisaoCadastroUsuario, DivisaoDadosUsuario, InputEmail, InputNome, LabelEmail, LabelNome} from './styled'


class CadastroUsuario extends React.Component {
    state = {
        inputNome: "",
        inputEmail: ""
    }

    onChangeInputNome = (event) => {
        this.setState({inputNome: event.target.value})
    }

    onChangeInputEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    clicarBotaoSalvar = () => {
        this.props.onClickBotaoSalvar(this.state.inputNome, this.state.inputEmail)
    }

    render () {
        

        return (
            <DivisaoCadastroUsuario>
                <DivisaoDadosUsuario>
                    <LabelNome>Nome:</LabelNome>
                    <InputNome type="text" id="Nome" name="Nome" onChange={this.onChangeInputNome} value={this.state.inputNome}></InputNome>

                    <LabelEmail>O email:</LabelEmail>
                    <InputEmail type="email" id="Mail" name="Mail" onChange={this.onChangeInputEmail} value={this.state.inputEmail}></InputEmail>

                    <BotaoSalvar onClick={this.clicarBotaoSalvar}>Salvar</BotaoSalvar>
                </DivisaoDadosUsuario>
            </DivisaoCadastroUsuario>
        )
            
        
    }
}

export default CadastroUsuario