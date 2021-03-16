import React from 'react'
import LogoENome from '../../components/LogoENome/LogoENome'
import Menu from '../../components/Menu/Menu'
import { Playlist } from '../../components/Playlist/Playlist'
import { DivisaoPrincipal } from './stylesPrincipal'
import {Autorizacao} from '../../components/Autorizacao/Autorizacao'

export class Principal extends React.Component {

    state = {
        opcaoMenu: "inicial",
        autorizacao: ""
    }

    onCLickMenu = (opcao) => {
        if(this.state.autorizacao === "") {
            this.setState( {opcaoMenu: "inicial"} )
        } else {
            this.setState({opcaoMenu : opcao})
        }
       
    }

    onClickEntrarAutorizacao = (valorAutorizacao) => {
        this.setState( { autorizacao: valorAutorizacao, 
            opcaoMenu: "Playlists"
        } )

    }


    render() {
        
        let componenteDadosExibidos
        if(this.state.opcaoMenu === "Playlists") {

            componenteDadosExibidos =  <Playlist 
                autorizacao= {this.state.autorizacao}
            />
        }

        if(this.state.opcaoMenu === "inicial") {
            componenteDadosExibidos = <Autorizacao 
                onClickEntrar={this.onClickEntrarAutorizacao}
            />
        }

        return <DivisaoPrincipal>
            <LogoENome 
                imagem={"https://www.flaticon.com/svg/vstatic/svg/3043/3043665.svg?token=exp=1612644423~hmac=28110171c7419886dd599a1a0f96ab6b"}
                nome={'Labefy'}
            />

            <Menu
                itemsMenu={["Playlists", "Artistas", "Músicas", "Albuns"]}
                onClickMenu={this.onCLickMenu}
            
            />

            {componenteDadosExibidos}

        </DivisaoPrincipal>

    }



}