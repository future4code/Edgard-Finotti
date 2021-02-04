import React from 'react'
import { Cabecalho } from '../components/Cabecalho/Cabecalho'
import { DivisaoPrincipal } from './styles'
import foguete from '../assets/rocket-icon.jpg'

export class Principal extends React.Component {

    state = {

    }


    render() {


        return <DivisaoPrincipal>
            <Cabecalho 
                nomeEmpresa="SpaceX"
                imagemLogo={foguete}
            />
        </DivisaoPrincipal>
    }
}