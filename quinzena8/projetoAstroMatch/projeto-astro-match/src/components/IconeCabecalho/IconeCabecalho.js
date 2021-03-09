import React from 'react'

import { DivisaoIconeCabecalho, StyleGroupAddIcon, StyleGroupIcon } from './stylesIconeCabecalho'
import { Icon, Tooltip } from '@material-ui/core';



export function IconeCabecalho(props) {

    
    
    return (
        <DivisaoIconeCabecalho telaInicial={props.mostrarTelaInicial}>
            {props.mostrarTelaInicial ? (
                <Tooltip title="Matchs" arrow placement="right" >
                    <StyleGroupAddIcon onClick={props.aoClicarSobre} fontSize="large"  />
                </Tooltip>
            )
                :(
                    <Tooltip title="Perfis" arrow placement="left">
                        <StyleGroupIcon onClick={props.aoClicarSobre} fontSize="large" />
                    </Tooltip>
                )
            }
        </DivisaoIconeCabecalho>
    )
}