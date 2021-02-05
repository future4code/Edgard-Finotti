import React from 'react'
import { Cabecalho } from '../components/Cabecalho/Cabecalho'
import { DivisaoPrincipal, DivisaoImagem, ImagemTerra } from './styles'
import foguete from '../assets/rocket-icon.jpg'
import spacexImage02 from '../assets/spacex-image02.jpg'
import spacexImage03 from '../assets/spacex-image03.jpg'
import spacexImage from '../assets/spacex-image.jpg'

export class Principal extends React.Component {

    state = {

    }


    render() {


        return <DivisaoPrincipal>
            <Cabecalho 
                nomeEmpresa="SpaceX"
                imagemLogo={foguete}
            />
            <DivisaoImagem>
                <ImagemTerra src={spacexImage} />
                <ImagemTerra src={spacexImage02} />
                <ImagemTerra src={spacexImage03} />
            </DivisaoImagem>
        </DivisaoPrincipal>
    }
}