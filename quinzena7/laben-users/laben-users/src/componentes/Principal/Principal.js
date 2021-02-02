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
        this.setState({cadastrar: !this.state.cadastrar})
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

    pegarListaUsuarios = async () => {

        try {
            const resposta = await axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                {
                    headers: {
                        Authorization: "edgard-finotti-muyembe"
                    }
                }
            )
            this.setState({ usuarios: resposta.data})

        } catch (erro) {
            alert(erro)
        }

    }

    excluirUsuarioLista = (usuario) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`,
            {
                headers: {
                    Authorization: "edgard-finotti-muyembe"
                }
            } 
        )
        .then(res => {
            alert(`Usuário ${usuario.name} excluido com sucesso !`)
            this.pegarListaUsuarios()
        })
        .catch((err) => alert(err))
    }

    onClickExcluir = ( objetoUsuario) => {
        this.excluirUsuarioLista(objetoUsuario)
    }

    cadastrarNovoUsuario = () => {
        this.setState({cadastrar: true})
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
                onCLickBotaoExcluir = {this.onClickExcluir}
                onCLickBotaoNovoUsuario = {this.cadastrarNovoUsuario}
            />        
        }


        return (
            <div>
                <BotaoIrParaLista onClick={this.irParaLista}>{this.state.cadastrar ? "Ir para a página da lista" : "Cadastrar novo Usuário" }</BotaoIrParaLista>
                {componenteExibicao}
            </div>
            
        )
            
        
    }
}

export default Principal