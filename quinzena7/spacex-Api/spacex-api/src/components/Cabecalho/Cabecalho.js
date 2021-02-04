import React from 'react'
import { DivisaoCabecalho, NomeEmpresa, ImagemLogo } from './styles'

export const Cabecalho = (props) => {
    return <DivisaoCabecalho>
        <ImagemLogo src={props.imagemLogo} />
        <NomeEmpresa>{props.nomeEmpresa}</NomeEmpresa>
    </DivisaoCabecalho>
}
