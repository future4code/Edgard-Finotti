import React from 'react'
import { DivisaoCabecalho, NomeEmpresa, ImagemLogo, DivisaoLogoENome, DivisaoMenu, ItemMenu, MenuLista } from './styles'

export const Cabecalho = (props) => {
    return <DivisaoCabecalho>
        <DivisaoLogoENome>
            <ImagemLogo src={props.imagemLogo} />
            <NomeEmpresa>{props.nomeEmpresa}</NomeEmpresa>
        </DivisaoLogoENome>
        
        <DivisaoMenu>
            <MenuLista>
                <ItemMenu>Cápsulas</ItemMenu>
                <ItemMenu>Tripulação</ItemMenu>
                <ItemMenu>Lançamentos</ItemMenu>
            </MenuLista>

        </DivisaoMenu>
    </DivisaoCabecalho>
}
