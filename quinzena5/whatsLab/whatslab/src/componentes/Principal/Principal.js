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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    margin: 0 16px;
    
`
const DivisaoDigitarMensagem = styled.div`
    
`

export class Principal extends React.Component {

    state = {
        mensagens: [],

        contador: 0
    }

    receberMensagem = (usuario, mensagem) => {

        const novaMensagem = {
            usuario: usuario,
            mensagem: mensagem,
            id: this.state.contador + 1
        }

        const novaLista = [...this.state.mensagens]

        novaLista.push(novaMensagem)

        this.setState({mensagens: novaLista, contador: novaMensagem.id})

    }

    apagarMensagemDoubleClick = (usuarioClicado, mensagemCLicada) => {
        const novaLista = this.state.mensagens.filter((item) => {
            if( !((item.usuario === usuarioClicado) && (item.mensagem === mensagemCLicada))){
                return true
            }
            return false
        })

        this.setState({ mensagens: novaLista })
    }

    
    render() {
        
        let listaMensagens
        if(this.state.mensagens.length !== 0) {
            listaMensagens = this.state.mensagens.map((item) => {
                return (
                    <Mensagem
                        key={item.id} 
                        usuario={item.usuario}
                        mensagem={item.mensagem}
                        doubleClickMensagem = {this.apagarMensagemDoubleClick}
                    />
                )
            })
        }

        

        return(
            

            <DivisaoPrincipal>

                <DivisaoMensagens>
                    {listaMensagens}
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