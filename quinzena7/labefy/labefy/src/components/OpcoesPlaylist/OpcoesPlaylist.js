import React from 'react'
import { DivisaoExcluir, DivisaoMusicas, DivisaoOpcoesPlaylist, ImagemExibirMusicas, TextoInformacao, ImagemExcluirPlaylist, BotaoExcluirPlaylist, BotaoListaDeMusicas } from './stylesOpcoesPlaylist'



export class OpcoesPlaylist extends React.Component {

    state = {
      
    }

    
    

    render() {
        
        
        return <DivisaoOpcoesPlaylist>
           
            <BotaoListaDeMusicas onClick={}>Ver Músicas</BotaoListaDeMusicas>
            <BotaoExcluirPlaylist onClick={}>Excluir Playlist</BotaoExcluirPlaylist>

            
        </DivisaoOpcoesPlaylist>

    }



}