import React from 'react'
import styled from 'styled-components'

const DivisaoPrincipal = styled.div`
    width: 800px;
    height: 95vh;
    border: 1px solid black;

`

export class Principal extends React.Component {

    state = {
        mensagens: []
    }

    render() {

        return(
            <DivisaoPrincipal>


            </DivisaoPrincipal>
        )
    }
}