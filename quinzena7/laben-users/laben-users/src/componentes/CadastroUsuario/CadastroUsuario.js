import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const DivisaoCadastroUsuario = styled.div`
    border: 1px solid black;
    width: 350px;
    height: 200px;
    margin: 0 auto;
`

const DivisaoDadosUsuario = styled.div`
    display: flex;
    flex-direction: column;

    padding: 16px 32px;
`
const LabelNome = styled.label`
    font-weight: bold;
`

const InputNome = styled.input`
    
`

const LabelEmail = styled.label`
    margin-top: 16px;
    font-weight: bold;
`

const InputEmail = styled.input`

`
const BotaoSalvar = styled.button`
    margin-top: 32px;
    width: 72px;
    padding: 8px 16px;

    align-self: center;
    color: white;
    background-color: blue;
    font-weight: bold;
    border: none;
    border-radius: 4px;
`



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

    render () {
        console.log("this.state.inputNome", this.state.inputNome)
        console.log("this.state.inputEmail", this.state.inputEmail)

        return (
            <DivisaoCadastroUsuario>
                <DivisaoDadosUsuario>
                    <LabelNome for="Nome">Nome:</LabelNome>
                    <InputNome type="text" id="Nome" name="Nome" onChange={this.onChangeInputNome} value={this.state.inputNome}></InputNome>

                    <LabelEmail for="Mail">O email:</LabelEmail>
                    <InputEmail type="email" id="Mail" name="Mail" onChange={this.onChangeInputEmail} value={this.state.inputEmail}></InputEmail>

                    <BotaoSalvar>Salvar</BotaoSalvar>
                </DivisaoDadosUsuario>
            </DivisaoCadastroUsuario>
        )
            
        
    }
}

export default CadastroUsuario