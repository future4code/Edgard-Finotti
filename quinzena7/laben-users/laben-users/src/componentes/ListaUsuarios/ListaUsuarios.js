import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const DivisaoListarUsuarios = styled.div`

`

const Titulo = styled.h1`

`

class ListaUsuarios extends React.Component {
    state = {
        
    }

    
    render () {

        return (
            <DivisaoListarUsuarios>
                <Titulo>Usuários Cadastrados:</Titulo>

            </DivisaoListarUsuarios>
            
        )
            
        
    }
}

export default ListaUsuarios