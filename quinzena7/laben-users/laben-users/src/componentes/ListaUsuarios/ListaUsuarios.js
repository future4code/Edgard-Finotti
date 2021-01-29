import React from 'react'
import styled from 'styled-components'


const DivisaoListarUsuarios = styled.div`
    width: 400px;
    margin: 0 auto;
`

const Titulo = styled.h1`
    text-align: center;
`

const DivisaoListagemDeUsuarios = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 50px;
    padding: 0 8px;

    border-bottom: 1px solid black;
`
const NomeUsuario = styled.p`
    font-size: 20px;
`
const ImagemBotaoExcluir = styled.img`
    height: 50%;

    :hover {
        cursor: pointer;
    } 
`
const MensagemListaVazia = styled.p`
    text-align: center;
    font-size: 32px;
    
`

const DivisaoBotaoCadastrarUsuario = styled.div`
    display: flex;
    justify-content: flex-end;
`

const BotaoCadastrarNovoUsuario = styled.button`
    font-weight: bold;
    padding: 8px;

    :hover {
        cursor: pointer;
    }
`



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