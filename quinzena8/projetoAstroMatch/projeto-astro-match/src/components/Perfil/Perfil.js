import React from 'react'
import { DivisaoCardPerfil } from './stylesPerfil'

export function Perfil(props) {
    
    console.log("perfil", props.perfil.photo)

    return (
        <DivisaoCardPerfil imagem={props.perfil.photo}>
           
        </DivisaoCardPerfil>
    )
}