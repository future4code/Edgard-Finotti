import React from 'react'
import styled from 'styled-components'


const DivisaoListarUsuarios = styled.div`

`

const Titulo = styled.h1`

`

const DivisaoListagemDeUsuarios = styled.div`

`
const NomeUsuario = styled.p`

`
const ImagemBotaoExcluir = styled.img`

`

class ListaUsuarios extends React.Component {
    state = {
        
    }

    render () {

        const componenteUsuarios = this.props.listaDeUsuarios.map((usuario, index) => {
            return (
                <DivisaoListagemDeUsuarios key={index}>
                    <NomeUsuario>{usuario.name}</NomeUsuario>
                    <ImagemBotaoExcluir src={this.props.imagemBotaoExcluir}></ImagemBotaoExcluir>
                </DivisaoListagemDeUsuarios>
            )
        })

        return (
            <DivisaoListarUsuarios>
                <Titulo>Usuários Cadastrados:</Titulo>
                {componenteUsuarios}
            </DivisaoListarUsuarios>
            
        )
            
        
    }
}

export default ListaUsuarios