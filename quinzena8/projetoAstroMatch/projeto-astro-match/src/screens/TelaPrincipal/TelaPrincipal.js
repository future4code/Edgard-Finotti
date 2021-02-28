import React, {useState, useEffect} from 'react'
import { Cabecalho } from '../../components/Cabecalho/Cabecalho'
import { DivisaoPrincipal } from './stylesTelaPrincipal'
import logo from '../../assets/logoAstroMatch.png'
import { Perfil } from '../../components/Perfil/Perfil'
import axios from 'axios'
import { BASE_URL, axiosConfig } from '../../constants/requisicoes'

export function TelaPrincipal() {
    const [ mostrarTelaInicial, setMostrarTelaInicial ] = useState(true)
    const [ perfil, setPerfil ] = useState({})
    
    const mudarEstadoMostrarTelaInicial = () => {
        setMostrarTelaInicial( !mostrarTelaInicial )
    }

    useEffect(() => {
        buscarPerfil()
    }, [])

    const buscarPerfil = async () => {

        try {
            const response = await axios.get(`${BASE_URL}/${axiosConfig.headers.Authorization}/person`)
            
            setPerfil(response.data.profile)
        } catch(error) {
            console.log(error.response)
        }

    }

    const naoCurtiuPerfil = (id) => {
        const body = {
            id: id,
            choice: false
        }

        axios
            .post(`${BASE_URL}/${axiosConfig.headers.Authorization}/choose-person`, body)
            .then(() => {
                buscarPerfil()
            })
            .catch((error) => {
                alert(error.message)
            })
        
    }

    const matchNoPerfil = (id) => {
        const body = {
            id: id,
            choice: true
        }

        axios
            .post(`${BASE_URL}/${axiosConfig.headers.Authorization}/choose-person`, body)
            .then(() => {
                buscarPerfil()
            })
            .catch((error) => {
                alert(error.message)
            })
        
    }

    let componentesExibicaoTelaInicial
    componentesExibicaoTelaInicial = <> 
        <Perfil 
            perfil={perfil}
            onClickBotaoMatch= {matchNoPerfil}
            onClickBotaoNaoCurtiu= {buscarPerfil}
        />

    </>

    return (
        <DivisaoPrincipal>

            <Cabecalho 
                imagemLogo = {logo}
                mostrarTelaInicial = {mostrarTelaInicial}
                aoClicarSobreIcone= {mudarEstadoMostrarTelaInicial}
            />

            {componentesExibicaoTelaInicial}
            
        </DivisaoPrincipal>
    )
}