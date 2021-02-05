import React from 'react'
import { DivisaoCabecalho, NomeEmpresa, ImagemLogo, DivisaoLogoENome, DivisaoMenu, ItemMenu, MenuLista } from './styles'



export class Cabecalho extends React.Component {

    state= {

    }

    onClickMenu = (menu) => {
        this.props.onClickMenu(menu)
    }

    render () {
        return <DivisaoCabecalho>
            <DivisaoLogoENome>
                <ImagemLogo src={this.props.imagemLogo} />
                <NomeEmpresa>{this.props.nomeEmpresa}</NomeEmpresa>
            </DivisaoLogoENome>
        
            <DivisaoMenu>
                <MenuLista>
                    <ItemMenu onClick={() => this.onClickMenu("sobre")} >Sobre</ItemMenu>
                    <ItemMenu onClick={() => this.onClickMenu("capsulas")}>Cápsulas</ItemMenu>
                    <ItemMenu onClick={() => this.onClickMenu("tripulacao")}>Tripulação</ItemMenu>
                    <ItemMenu onClick={() => this.onClickMenu("lancamentos")}>Lançamentos</ItemMenu>
                </MenuLista>

            </DivisaoMenu>
        </DivisaoCabecalho>
    }
    
}
