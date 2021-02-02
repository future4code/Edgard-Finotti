import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import CadastroUsuario from '../CadastroUsuario/CadastroUsuario'
import ListaUsuarios from '../ListaUsuarios/ListaUsuarios'
import imagemExcluir from '../../images/remove.png'
import {BASE_URL, axiosConfig} from '../../contants/requisicoes'

const BotaoIrParaLista = styled.button`
    margin: 16px 0 64px 16px;
    font-weight: bold;
    padding: 12px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid darkgray;
`
const DivisaoPrincipal = styled.div`
    width: 800px;
    margin: 0 auto;
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

        axios.post(`${BASE_URL}/users`, body, axiosConfig)
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
            .get(`${BASE_URL}/users`, axiosConfig)
            this.setState({ usuarios: resposta.data})
        } catch (erro) {
            alert(erro)
        }

    }

    excluirUsuarioLista = (usuario) => {
        axios.delete(`${BASE_URL}/users/${usuario.id}`, axiosConfig)
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
            <DivisaoPrincipal>
                <BotaoIrParaLista onClick={this.irParaLista}>{this.state.cadastrar ? "LISTA DE USUÁRIOS" : "NOVO USUÁRIO" }</BotaoIrParaLista>
                {componenteExibicao}
            </DivisaoPrincipal>
            
        )
            
        
    }
}

export default Principal