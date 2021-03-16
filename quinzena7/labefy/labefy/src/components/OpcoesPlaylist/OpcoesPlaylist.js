import React from 'react'
import { DivisaoOpcoesPlaylist, BotaoExcluirPlaylist, BotaoListaDeMusicas } from './stylesOpcoesPlaylist'



export class OpcoesPlaylist extends React.Component {

   
    render() {
        
        
        return <DivisaoOpcoesPlaylist>
           
            <BotaoListaDeMusicas onClick={this.props.onClickBotaoVerMusicas}>Ver Músicas</BotaoListaDeMusicas>
            <BotaoExcluirPlaylist onClick={this.props.onClickExcluirPlaylist}>Excluir Playlist</BotaoExcluirPlaylist>

            
        </DivisaoOpcoesPlaylist>

    }



}