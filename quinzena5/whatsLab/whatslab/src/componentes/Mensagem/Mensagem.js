import React from 'react'
import styled from 'styled-components'

const DivisaoParagrafo = styled.div`
    display: flex;
`

const DivisaoMensagemOutrosUsuarios = styled.div`
    padding: 8px;
    border-radius: 8px;
    background-color: white; 
    margin: 8px 0;
`

const ParagrafoMensagem = styled.p.attrs(() => {
    
})`
    
    &.mensagem-eu {
        margin-left: auto;
        background-color: #d9f5c4;
        padding: 8px;
        border-radius: 8px;
    }

`



export class Mensagem extends React.Component {

    clicarSobreMensagem = (usuario, mensagem) => {
        this.props.doubleClickMensagem(usuario, mensagem)
    }

    
    
    render()  {

        /* inserir classe caso nome do usario seja "eu" */
        let classeEu
        let componenteExibirMensagem
        if(this.props.usuario === "eu" ) {
            classeEu = "mensagem-eu"
            componenteExibirMensagem = <ParagrafoMensagem className={classeEu}  onDoubleClick={() => this.clicarSobreMensagem(this.props.usuario, this.props.mensagem)}>
                {this.props.mensagem}
            </ParagrafoMensagem>
        } else {
            componenteExibirMensagem = <DivisaoMensagemOutrosUsuarios>
                <ParagrafoMensagem className={classeEu}  onDoubleClick={() => this.clicarSobreMensagem(this.props.usuario, this.props.mensagem)}>
                    <b>{this.props.usuario}</b>
                </ParagrafoMensagem>
                <ParagrafoMensagem className={classeEu}  onDoubleClick={() => this.clicarSobreMensagem(this.props.usuario, this.props.mensagem)}>
                    {this.props.mensagem}
                </ParagrafoMensagem>
            </DivisaoMensagemOutrosUsuarios>
            
   
        }

        return (
            
            <DivisaoParagrafo>
                {componenteExibirMensagem}
            </DivisaoParagrafo>
            
            
        )

    }
    
}