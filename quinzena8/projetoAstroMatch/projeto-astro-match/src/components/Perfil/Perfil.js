import React from 'react'
import { DivisaoCardPerfil, NomeIdade, DivisaoInformacoes, Bio } from './stylesPerfil'

export function Perfil(props) {
    
    console.log("perfil", props.perfil)

    return (
        <DivisaoCardPerfil imagem={props.perfil.photo}>

            <DivisaoInformacoes>
                
                <NomeIdade>{props.perfil.name}, {props.perfil.age} anos</NomeIdade>
            
                <Bio>{props.perfil.bio}</Bio>
                
            </DivisaoInformacoes>
            

        </DivisaoCardPerfil>
    )
}