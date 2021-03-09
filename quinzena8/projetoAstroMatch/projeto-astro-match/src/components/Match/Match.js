import React from 'react'
import { DivisaoPerfilMatch, ImagemPerfilMatch, NomePerfilMatch } from './stylesMatch'

export function Match(props) {

    return (
        <DivisaoPerfilMatch>
            <ImagemPerfilMatch src={props.foto} />
            <NomePerfilMatch>{props.nome}</NomePerfilMatch>
        </DivisaoPerfilMatch>
    )
}