import React, {useEffect} from 'react'
import { DivisaoCabecalho, ImagemLogo, DivisaoIconeInicial, DivisaoIconeMatchs } from './stylesCabecalho'
import {IconeCabecalho} from '../IconeCabecalho/IconeCabecalho'


export function Cabecalho(props) {

    // useEffect(() => {
    //     mostrarIconeCabecalho(props.mostrarTelaInicial)
    // }, [])
    
    // let iconeMatchs
    // let iconeInicial
    // const mostrarIconeCabecalho = (valorMostrarTelaInicial) => {
        
    //     valorMostrarTelaInicial ? 
    //         iconeMatchs = <IconeCabecalho 
    //             imagemIcone = {GroupAddIcon}
    //         />
    //         : 
    //         iconeInicial = <IconeCabecalho />
    // }

    let iconeMatchs
    let iconeInicial
    props.mostrarTelaInicial ? 
        iconeMatchs = <IconeCabecalho 
            mostrarTelaInicial = {props.mostrarTelaInicial}
            aoClicarSobre= {props.aoClicarSobreIcone}
        />
        : 
        iconeInicial = <IconeCabecalho 
            aoClicarSobre= {props.aoClicarSobreIcone}
            mostrarTelaInicial = {props.mostrarTelaInicial}
        />


    return (
        <DivisaoCabecalho>

            <DivisaoIconeInicial>
                {iconeInicial}
            </DivisaoIconeInicial>
            

            <ImagemLogo src={props.imagemLogo} />

            <DivisaoIconeMatchs>
                {iconeMatchs}
            </DivisaoIconeMatchs>
            

        </DivisaoCabecalho>
    )
}