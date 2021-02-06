import React from 'react'
import LogoENome from '../../components/LogoENome/LogoENome'
import { DivisaoPrincipal } from './stylesPrincipal'

export class Principal extends React.Component {

    state = {

    }



    render() {

        return <DivisaoPrincipal>
            <LogoENome 
                imagem={"https://www.flaticon.com/svg/vstatic/svg/3043/3043665.svg?token=exp=1612644423~hmac=28110171c7419886dd599a1a0f96ab6b"}
                nome={'Labefy'}
            />
        </DivisaoPrincipal>

    }



}