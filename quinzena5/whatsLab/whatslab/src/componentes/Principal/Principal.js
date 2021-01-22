import React from 'react'
import styled from 'styled-components'
import { DigitarMensagem } from '../DigitarMensagem/DigitarMensagem'
import { Mensagem } from '../Mensagem/Mensagem'

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

        const novaMensagem = {
            usuario: usuario,
            mensagem: mensagem
        }

        const novaLista = [...this.state.mensagens]

        novaLista.push(novaMensagem)

        this.setState({mensagens: novaLista})

    }

    render() {
        
        const listaMensagens
        if(this.state.mensagens.length !== 0) {
            listaMensagens = this.state.mensagens.map((item) => {
                return (
                    <Mensagem 
                        usuario={item.usuario}
                        mensagem={item.mensagem}
                    />
                )
            })
        }

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