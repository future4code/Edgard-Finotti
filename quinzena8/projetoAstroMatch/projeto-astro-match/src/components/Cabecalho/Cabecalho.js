import React, {useEffect} from 'react'
import { DivisaoCabecalho, ImagemLogo } from './stylesCabecalho'

export function Cabecalho(props) {

    useEffect(() => {
        mostrarIconeCabecalho(props.mostrarTelaInicial)
    }, [])
    
    let iconeMatch
    const mostrarIconeCabecalho = (valorMostrarTelaInicial) => {
        valorMostrarTelaInicial ? iconeMatch = 
    }

    return (
        <DivisaoCabecalho>


            <ImagemLogo src={props.imagemLogo} />



        </DivisaoCabecalho>
    )
}