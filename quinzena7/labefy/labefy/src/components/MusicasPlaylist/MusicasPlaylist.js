import React from 'react'
import {DivisaoMusica, NomeMusica, NomeArtistaMusica, DivisaoTituloMusica, IframeMusica, DivisaoPlayMusica} from './styledMusicasPlaylist'




const  MusicasPlaylist = (props) => {

    return (
      <DivisaoMusica>
            <DivisaoTituloMusica>
                <NomeMusica>{props.nome}</NomeMusica>
                <NomeArtistaMusica>{props.artista}</NomeArtistaMusica> 
            </DivisaoTituloMusica>

            <DivisaoPlayMusica>
                <IframeMusica src={props.url}  frameborder="0" allowtransparency="true" allow="encrypted-media"></IframeMusica>
            </DivisaoPlayMusica>
            
      </DivisaoMusica>
    );
  }
  
  export default MusicasPlaylist;