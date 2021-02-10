import React from 'react'
import { DivisaoAdicionarMusica, BotaoAdicionarMusica, InputArtista, InputLink, InputNomeMusica, LabelArtista, LabelLink, LabelNomeMusica, Titulo } from './stylesSecaoAdicionarMusica'


export class SecaoAdicionarMusica extends React.Component {

    state = {
        inputNomeMusica: "",
        inputNomeArtista: "",
        inputLink: ""

    }

    // onCLickMenu = (opcao) => {
    //     this.setState({opcaoMenu : opcao})
    // }

    onChangeInputNomeMusica = (event) => {
        this.setState({ inputNomeMusica: event.target.value })
    }

    onChangeInputNomeArtista = (event) => {
        this.setState({ inputNomeArtista: event.target.value })
    }

    onChangeInputLink = (event) => {
        this.setState({ inputLink: event.target.value })
    }
    
    render() {
        console.log("inputNomeMusica", this.state.inputNomeMusica)
        console.log("inputNomeArtista", this.state.inputNomeArtista)
        console.log("inputLink", this.state.inputLink)

        return <DivisaoAdicionarMusica>
            <Titulo>Nova Música:</Titulo>

            <LabelNomeMusica>Nome Música:</LabelNomeMusica>
            <InputNomeMusica value={this.state.inputNomeMusica} onChange={this.onChangeInputNomeMusica}></InputNomeMusica>

            <LabelArtista>Nome Artista:</LabelArtista>
            <InputArtista value={this.state.inputNomeArtista} onChange={this.onChangeInputNomeArtista}></InputArtista>

            <LabelLink>Link:</LabelLink>
            <InputLink value={this.state.inputLink} onChange={this.onChangeInputLink} ></InputLink>

            <BotaoAdicionarMusica>Adicionar</BotaoAdicionarMusica>
        </DivisaoAdicionarMusica>
    }



}