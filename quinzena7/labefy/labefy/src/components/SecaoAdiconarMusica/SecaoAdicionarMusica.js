import React from 'react'
import { DivisaoAdicionarMusica, BotaoAdicionarMusica, InputArtista, InputLink, InputNomeMusica, LabelArtista, LabelLink, LabelNomeMusica, Titulo } from './stylesSecaoAdicionarMusica'


export class SecaoAdicionarMusica extends React.Component {

    state = {
        inputNomeMusica: "",
        inputNomeArtista: "",
        inputLink: ""

    }

    
    onChangeInputNomeMusica = (event) => {
        this.setState({ inputNomeMusica: event.target.value })
    }

    onChangeInputNomeArtista = (event) => {
        this.setState({ inputNomeArtista: event.target.value })
    }

    onChangeInputLink = (event) => {
        this.setState({ inputLink: event.target.value })
    }

    onClickAdicionarMusica = () => {
        this.props.onClickAdicionarMusica(this.state.inputNomeMusica, this.state.inputNomeArtista, this.state.inputLink)
    }
    
    render() {

        return <DivisaoAdicionarMusica>
            <Titulo>Nova Música:</Titulo>

            <LabelNomeMusica>Nome Música:</LabelNomeMusica>
            <InputNomeMusica value={this.state.inputNomeMusica} onChange={this.onChangeInputNomeMusica}></InputNomeMusica>

            <LabelArtista>Nome Artista:</LabelArtista>
            <InputArtista value={this.state.inputNomeArtista} onChange={this.onChangeInputNomeArtista}></InputArtista>

            <LabelLink>Link:</LabelLink>
            <InputLink value={this.state.inputLink} onChange={this.onChangeInputLink} ></InputLink>

            <BotaoAdicionarMusica onClick={this.onClickAdicionarMusica}>Adicionar</BotaoAdicionarMusica>
        </DivisaoAdicionarMusica>
    }



}