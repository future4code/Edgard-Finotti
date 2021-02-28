import React, {useState, useEffect} from 'react'
import { Cabecalho } from '../../components/Cabecalho/Cabecalho'
import { DivisaoPrincipal } from './stylesTelaPrincipal'
import logo from '../../assets/logoAstroMatch.png'
import { Perfil } from '../../components/Perfil/Perfil'

export function TelaPrincipal() {
    const [ mostrarTelaInicial, setMostrarTelaInicial ] = useState(true)
    const [ perfil, setPerfil ] = useState("")
    
    const mudarEstadoMostrarTelaInicial = () => {
        setMostrarTelaInicial( !mostrarTelaInicial )
    }

    return (
        <DivisaoPrincipal>

            <Cabecalho 
                imagemLogo = {logo}
                mostrarTelaInicial = {mostrarTelaInicial}
                aoClicarSobreIcone= {mudarEstadoMostrarTelaInicial}
            />

            <Perfil />
            
        </DivisaoPrincipal>
    )
}