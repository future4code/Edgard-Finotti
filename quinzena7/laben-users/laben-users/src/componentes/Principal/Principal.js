import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CadastroUsuario from '../CadastroUsuario/CadastroUsuario'
import ListaUsuarios from '../ListaUsuarios/ListaUsuarios'
import imagemExcluir from '../../images/remove.png'

const BotaoIrParaLista = styled.button`
    margin: 16px 0 64px 16px;
`



class Principal extends React.Component {
    state = {
        cadastrar: true,

        novoUsuario: { },

        usuarios: []
    }

    componentDidMount() {
        this.pegarListaUsuarios();
    }

    irParaLista = () => {
        this.setState({cadastrar: false})
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
        .then(() => {
            alert(`Usuário ${this.state.novoUsuario.name} adicionado com sucesso.`)
            this.setState({cadastrar: false})
            this.pegarListaUsuarios()
        })
        .catch((error) => alert(error))
    }

    pegarListaUsuarios = () => {
        axios
        .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
            headers: {
                Authorization: "edgard-finotti-muyembe"
            }
            }
        )
        .then((res) => this.setState({ usuarios: res.data}))
        .catch((err) => alert(err));
    }

    

    render () {

        

        let componenteExibicao
        if(this.state.cadastrar) {
            componenteExibicao = <CadastroUsuario 
                onClickBotaoSalvar = {this.onClickBotaoSalvarCadastroUsuario}
            />
        } else {
            componenteExibicao = <ListaUsuarios
                listaDeUsuarios = {this.state.usuarios}
                imagemBotaoExcluir = {imagemExcluir}
            />        
        }


        return (
            <div>
                <BotaoIrParaLista onClick={this.irParaLista}>Ir para a página da lista</BotaoIrParaLista>
                {componenteExibicao}
            </div>
            
        )
            
        
    }
}

export default Principal