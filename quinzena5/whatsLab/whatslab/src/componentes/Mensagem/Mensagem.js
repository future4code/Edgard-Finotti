import React from 'react'
import styled from 'styled-components'

const ParagrafoMensagem = styled.p.attrs(() => {
    
})`
    &.mensagem-eu {
        text-align: end;
    }

`


export class Mensagem extends React.Component {

    clicarSobreMensagem = (usuario, mensagem) => {
        this.props.doubleClickMensagem(usuario, mensagem)
    }

    
    
    render()  {

        let classeEu
        if(this.props.usuario === "eu" ) {
            classeEu = "mensagem-eu"
        }

        return (
            
            <ParagrafoMensagem className={classeEu}  onDoubleClick={() => this.clicarSobreMensagem(this.props.usuario, this.props.mensagem)}>
                <b>{this.props.usuario}</b> : {this.props.mensagem}
            </ParagrafoMensagem>
            
        )

    }
    
}