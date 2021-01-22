import React from 'react'
import styled from 'styled-components'
import { DigitarMensagem } from '../DigitarMensagem/DigitarMensagem'

const DivisaoPrincipal = styled.div`
    width: 800px;
    height: 95vh;
    border: 1px solid black;

    display: grid;
    grid-template-rows: 98% auto;

`
const DivisaoMensagens = styled.div`

`
const DivisaoDigitarMensagem = styled.div`
    border-top: 1px solid black;
    
`

export class Principal extends React.Component {

    state = {
        mensagens: []
    }

    receberMensagem = (usuario, mensagem) => {
        console.log("usuario", usuario)
        console.log("mensagem", mensagem)
    }

    render() {

        return(
            <DivisaoPrincipal>

                <DivisaoMensagens>

                </DivisaoMensagens>



                <DivisaoDigitarMensagem>

                    <DigitarMensagem 
                        onClickEnviarMensagem = {this.receberMensagem}
                    
                    />

                </DivisaoDigitarMensagem>

            </DivisaoPrincipal>
        )
    }
}