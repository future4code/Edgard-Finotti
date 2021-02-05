import React from 'react'
import {ConteudoCapsula, TipoCapsula, StatusCapsula, AtualizacaoCapsula, DivisaoImagemCapsula, ImagemCapsula} from './styles'
import dragon1 from '../../assets/dragon1.jpg'
import dragon2 from '../../assets/dragon2.jpg'

export class Capsulas extends React.Component {

    state = {

    }


    render () {
        return  <ConteudoCapsula>
            <DivisaoImagemCapsula>
                <ImagemCapsula src={this.props.tipo === "Dragon 1.0" ? dragon1 : dragon2}/>
            </DivisaoImagemCapsula>
            <TipoCapsula><b>Tipo:</b> {this.props.tipo}</TipoCapsula>
            <StatusCapsula><b>Status:</b> {this.props.status === undefined ? this.props.status : "Desconhecido"}</StatusCapsula>
            <AtualizacaoCapsula><b>Última atualização:</b> {this.props.ultimaAtualizacao ? this.props.ultimaAtualizacao : "Desconhecida"  }</AtualizacaoCapsula>
        </ConteudoCapsula>
    }


}