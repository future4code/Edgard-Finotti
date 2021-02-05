import React from 'react'
import { Cabecalho } from '../components/Cabecalho/Cabecalho'
import { DivisaoPrincipal, DivisaoImagem, ImagemTerra, ParagrafoInformacaoEmpresa, DivisaoInformacoesEmpresa, DivisaoConteudo, TituloConteudo, DivisaoConteudoExibido } from './styles'
import foguete from '../assets/rocket-icon.jpg'
import spacexImage02 from '../assets/spacex-image02.jpg'
import spacexImage03 from '../assets/spacex-image03.jpg'
import spacexImage from '../assets/spacex-image.jpg'
// import gifFoguete from '../assets/animation-gif.gif'
import { BASE_URL } from '../constants/requisicoes'
import axios from 'axios'
import { Capsulas } from '../components/Capsulas/Capsulas'


export class Principal extends React.Component {

    state = {
        opcaoMenu: "inicial",
        informacoesEmpresa: {},
        informacoesCapsulas: []
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

    pegarInformacoesCapsulas = async () => {

        try {
            const resposta = await axios
            .get(`${BASE_URL}/capsules`)
            this.setState({ informacoesCapsulas: resposta.data})
        } catch (erro) {
            alert(erro)
        }

    }
    

    render() { 
        
        
        let tituloConteudo
        let componenteConteudo
        if(this.state.opcaoMenu === "sobre"){
            tituloConteudo = "Sobre a empresa: "
            if(JSON.stringify(this.state.informacoesEmpresa) === JSON.stringify({})){
                this.pegarInformacoesEmpresa()
                
            }
            else {
                componenteConteudo = <DivisaoInformacoesEmpresa>
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
            tituloConteudo = "Cápsulas: "
            if(this.state.informacoesCapsulas.length === 0) {
                this.pegarInformacoesCapsulas()
            }
            else {
               componenteConteudo = this.state.informacoesCapsulas.map((capsula) => {
                    return (
                        <Capsulas 
                            key={capsula.id}
                            tipo={capsula.type}
                            status={capsula.status}
                            ultimaAtualizacao={capsula.last_update}
                        />   
                    )    
               })
              
            }
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
                <TituloConteudo>{tituloConteudo}</TituloConteudo>
                <DivisaoConteudoExibido>
                    {componenteConteudo}
                </DivisaoConteudoExibido>
                
            </DivisaoConteudo>
        </DivisaoPrincipal>
    }
}