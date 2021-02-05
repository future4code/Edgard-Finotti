import React from 'react'
import {AgenciaTripulante, DivisaoImagem, DivisaoTripulante, ImagemTripulante, NomeTripulante, StatusTripulante} from './styles'

export class Tripulacao extends React.Component {

    state = {

    }


    render () {
        return  <DivisaoTripulante>
            <DivisaoImagem>
                <ImagemTripulante src={this.props.imagem} />
            </DivisaoImagem>

            <NomeTripulante>{this.props.nome}</NomeTripulante>
            <AgenciaTripulante>{this.props.agencia}</AgenciaTripulante>
            <StatusTripulante>{this.props.status}</StatusTripulante> 
        </DivisaoTripulante>
    }


}