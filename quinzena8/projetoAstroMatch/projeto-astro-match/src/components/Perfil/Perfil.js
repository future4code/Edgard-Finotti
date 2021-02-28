import React from 'react'
import { DivisaoCardPerfilImagem, StyleHighlightOffIcon, StyleFavoriteBorderIcon, DiviCardPerfil, NomeIdade, DivisaoInformacoes, Bio, DivisaoAcoes } from './stylesPerfil'
import { Tooltip } from '@material-ui/core';



export function Perfil(props) {
    
    console.log("perfil", props.perfil)

    return (
        <DiviCardPerfil>

            <DivisaoCardPerfilImagem imagem={props.perfil.photo} >
                <DivisaoInformacoes >
                    
                    <NomeIdade>{props.perfil.name}, {props.perfil.age} anos</NomeIdade>

                    <Bio>{props.perfil.bio}</Bio>

                </DivisaoInformacoes>

            
            </DivisaoCardPerfilImagem>

            <DivisaoAcoes>
                <Tooltip title="Não Curti" arrow placement="bottom" >
                    <StyleHighlightOffIcon style={{ fontSize: 70 }} />
                </Tooltip>
                <Tooltip title="Match" arrow placement="bottom" >
                    <StyleFavoriteBorderIcon style={{ fontSize: 70 }} />
                </Tooltip>
                
            </DivisaoAcoes>

        </DiviCardPerfil>
        
    )
}