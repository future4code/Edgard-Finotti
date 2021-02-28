import React from 'react'
import { DivisaoCardPerfilImagem, StyleHighlightOffIcon, StyleFavoriteBorderIcon, DiviCardPerfil, NomeIdade, DivisaoInformacoes, Bio, DivisaoAcoes } from './stylesPerfil'
import { Tooltip } from '@material-ui/core';



export function Perfil(props) {
    
    

    return (
        <DiviCardPerfil>

            <DivisaoCardPerfilImagem imagem={props.perfil.photo} >
                <DivisaoInformacoes >
                    
                    <NomeIdade>{props.perfil.name}, {props.perfil.age} anos</NomeIdade>

                    <Bio>{props.perfil.bio}</Bio>

                </DivisaoInformacoes>

            
            </DivisaoCardPerfilImagem>

            <DivisaoAcoes>
                <Tooltip title="Próximo Perfil" arrow placement="bottom" >
                    <StyleHighlightOffIcon onClick={() => props.onClickBotaoNaoCurtiu(props.perfil.id)} style={{ fontSize: 70 }} />
                </Tooltip>
                <Tooltip title="Match" arrow placement="bottom" >
                    <StyleFavoriteBorderIcon onClick={() => props.onClickBotaoMatch(props.perfil.id)} style={{ fontSize: 70 }} />
                </Tooltip>
                
            </DivisaoAcoes>

        </DiviCardPerfil>
        
    )
}