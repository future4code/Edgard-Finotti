import React from 'react'
import { Cabecalho } from '../components/Cabecalho/Cabecalho'
import { DivisaoPrincipal, DivisaoImagem, ImagemTerra, ParagrafoInformacaoEmpresa, DivisaoInformacoesEmpresa, TituloInformacoesEmpresa, DivisaoConteudo } from './styles'
import foguete from '../assets/rocket-icon.jpg'
import spacexImage02 from '../assets/spacex-image02.jpg'
import spacexImage03 from '../assets/spacex-image03.jpg'
import spacexImage from '../assets/spacex-image.jpg'
import gifFoguete from '../assets/animation-gif.gif'
import { BASE_URL } from '../constants/requisicoes'
import axios from 'axios'


export class Principal extends React.Component {

    state = {
        opcaoMenu: "inicial",
        informacoesEmpresa: {}
    }

    pegarInformacoesEmpresa = async () => {

        try {
            const resposta = await axios
            .get(`${BASE_URL}/company`)
            this.setState({ informacoesEmpresa: resposta.data})
        } catch (erro) {
            alert(erro)
        }

    }

    onClickMenu = (menuClicado) => {
        this.setState({ opcaoMenu: menuClicado})
    }
    

    render() {    
        let componenteConteudo
        if(this.state.opcaoMenu === "sobre"){
            if(JSON.stringify(this.state.informacoesEmpresa) === JSON.stringify({})){
                this.pegarInformacoesEmpresa()
                
            }
            else {
                componenteConteudo = <DivisaoInformacoesEmpresa>
                    <TituloInformacoesEmpresa>Sobre a Empresa:</TituloInformacoesEmpresa>
                    <ParagrafoInformacaoEmpresa><b>Nome:</b> {this.state.informacoesEmpresa.name}</ParagrafoInformacaoEmpresa>
                    <ParagrafoInformacaoEmpresa><b>Descrição:</b> {this.state.informacoesEmpresa.summary}</ParagrafoInformacaoEmpresa>
                    <ParagrafoInformacaoEmpresa><b>CEO:</b> {this.state.informacoesEmpresa.ceo}</ParagrafoInformacaoEmpresa>
                    <ParagrafoInformacaoEmpresa><b>Ano de Fundação:</b> {this.state.informacoesEmpresa.founded}</ParagrafoInformacaoEmpresa>
                    <ParagrafoInformacaoEmpresa><b>Colaboradores:</b> {this.state.informacoesEmpresa.employees}</ParagrafoInformacaoEmpresa>
                    <ParagrafoInformacaoEmpresa><b>Endereço:</b> {this.state.informacoesEmpresa.headquarters.address}, Cidade: {this.state.informacoesEmpresa.headquarters.city}, Estado: {this.state.informacoesEmpresa.headquarters.state}</ParagrafoInformacaoEmpresa>
                </DivisaoInformacoesEmpresa>
            }
            
        }

        if(this.state.opcaoMenu === "capsulas") {
            
        }

        return <DivisaoPrincipal>
            <Cabecalho 
                nomeEmpresa="SpaceX"
                imagemLogo={foguete}
                onClickMenu={this.onClickMenu}
            />
            <DivisaoImagem>
                <ImagemTerra src={spacexImage} />
                <ImagemTerra src={spacexImage02} />
                <ImagemTerra src={spacexImage03} />
            </DivisaoImagem>
            <DivisaoConteudo>
                {componenteConteudo}
            </DivisaoConteudo>
        </DivisaoPrincipal>
    }
}