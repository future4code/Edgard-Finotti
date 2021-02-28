import React from 'react'
import { DivisaoCabecalho, ImagemLogo } from './stylesCabecalho'

export function Cabecalho(props) {

    

    return (
        <DivisaoCabecalho>
            <ImagemLogo src={props.imagemLogo} />

        </DivisaoCabecalho>
    )
}