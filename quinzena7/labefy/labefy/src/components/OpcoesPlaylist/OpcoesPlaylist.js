import React from 'react'
import { DivisaoExcluir, DivisaoMusicas, DivisaoOpcoesPlaylist, ImagemExibirMusicas, TextoInformacao, ImagemExcluirPlaylist, BotaoExcluirPlaylist, BotaoListaDeMusicas } from './stylesOpcoesPlaylist'



export class OpcoesPlaylist extends React.Component {

    state = {
      
    }

    
    

    render() {
        
        
        return <DivisaoOpcoesPlaylist>
           
            <BotaoListaDeMusicas onClick={this.props.onClickBotaoVerMusicas}>Ver Músicas</BotaoListaDeMusicas>
            <BotaoExcluirPlaylist onClick={this.props.onClickExcluirPlaylist}>Excluir Playlist</BotaoExcluirPlaylist>

            
        </DivisaoOpcoesPlaylist>

    }



}