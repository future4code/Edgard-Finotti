import React from 'react'
import styled from 'styled-components'
import {BotaoCadastrarNovoUsuario, DivisaoBotaoCadastrarUsuario, DivisaoListagemDeUsuarios, DivisaoListarUsuarios, ImagemBotaoExcluir, MensagemListaVazia, NomeUsuario, Titulo } from './styled'

class ListaUsuarios extends React.Component {
    

    render () {

        let componenteUsuarios
        if(this.props.listaDeUsuarios.length !== 0) {
            componenteUsuarios = this.props.listaDeUsuarios.map((usuario, index) => {
                return (
                    <DivisaoListagemDeUsuarios key={index}>
                        <NomeUsuario>{usuario.name}</NomeUsuario>
                        <ImagemBotaoExcluir onClick={() => this.props.onCLickBotaoExcluir(usuario)} src={this.props.imagemBotaoExcluir}></ImagemBotaoExcluir>
                    </DivisaoListagemDeUsuarios>
                )
            })
        } else {
            componenteUsuarios = <MensagemListaVazia>Não existe usuários cadastrados :(</MensagemListaVazia>
        }
        

        return (
            <DivisaoListarUsuarios>
                <DivisaoBotaoCadastrarUsuario>
                    <BotaoCadastrarNovoUsuario onClick={this.props.onCLickBotaoNovoUsuario}>Novo</BotaoCadastrarNovoUsuario>
                </DivisaoBotaoCadastrarUsuario>
                <Titulo>Usuários Cadastrados:</Titulo>
                {componenteUsuarios}
            </DivisaoListarUsuarios>
            
        )
            
        
    }
}

export default ListaUsuarios