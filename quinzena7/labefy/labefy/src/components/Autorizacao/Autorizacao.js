import React from 'react'
import { BotaoEntrar, Titulo, DivisaoAutorizacao, InputAutorizacao} from './styledAutorizacao'


export class Autorizacao extends React.Component {

    state = {
        inputAutorizacao: ""
    }

    onChangeInputAutorizacao = (event) => {
        this.setState( { inputAutorizacao: event.target.value } )
    }
    
    onClickEntrarAutorizacao = () => {
        this.props.onClickEntrar(this.state.inputAutorizacao)
    }

    render() {
        
        

        return <DivisaoAutorizacao>
            <Titulo>Authorization: (edgard-finotti-muyembe)</Titulo>

            <InputAutorizacao value={this.state.inputAutorizacao} onChange={this.onChangeInputAutorizacao}></InputAutorizacao>

            <BotaoEntrar onClick={this.onClickEntrarAutorizacao}>Entrar</BotaoEntrar>

        </DivisaoAutorizacao>

    }



}