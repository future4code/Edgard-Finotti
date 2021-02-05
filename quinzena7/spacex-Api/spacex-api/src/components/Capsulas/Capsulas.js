import React from 'react'
import {ConteudoCapsula, TipoCapsula, StatusCapsula, AtualizacaoCapsula} from './styles'

export class Capsulas extends React.Component {

    state = {

    }


    render () {
        return  <ConteudoCapsula>
            <TipoCapsula>Tipo: {this.props.tipo}</TipoCapsula>
            <StatusCapsula>Status: {this.props.status}</StatusCapsula>
            <AtualizacaoCapsula>Última atualização: {this.props.ultimaAtualizacao}</AtualizacaoCapsula>
        </ConteudoCapsula>
    }


}