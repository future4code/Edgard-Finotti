import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CadastroUsuario from '../CadastroUsuario/CadastroUsuario'

const BotaoIrParaLista = styled.button`
    margin: 16px 0 64px 16px;
`



class Principal extends React.Component {
    state = {
        cadastrar: true,

        novoUsuario: { }
    }

    onClickBotaoSalvarCadastroUsuario = (nome, email) => {
        const objetoUsuario = {
            name: nome,
            email: email
        }

        this.setState({novoUsuario: objetoUsuario})

        this.criarUsuario(objetoUsuario)
    }

    criarUsuario = (novoUsuario) => {
        
        const body = novoUsuario

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
            headers: {
                Authorization:"edgard-finotti-muyembe"
            }
        }
        )
        .then(() => alert(`Usuário ${this.state.novoUsuario.name} adicionado com sucesso.`))
        .catch((error) => alert(error))
    }

    render () {

        

        let componenteCadastroUsuario
        if(this.state.cadastrar) {
            componenteCadastroUsuario = <CadastroUsuario 
                onClickBotaoSalvar = {this.onClickBotaoSalvarCadastroUsuario}
            />
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