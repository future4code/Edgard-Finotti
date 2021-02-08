import React from 'react'
import {DivisaoMusica, NomeMusica, NomeArtistaMusica, DivisaoTituloMusica, IframeMusica, DivisaoPlayMusica, DivisaoIconeDeletarMusica, ImagemDeletarMusica} from './styledMusicasPlaylist'




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
            
            <DivisaoIconeDeletarMusica>
              <ImagemDeletarMusica src={props.iconeDeletar} onClick={props.onClickDeletarMusica} />
            </DivisaoIconeDeletarMusica>
      </DivisaoMusica>
    );
  }
  
  export default MusicasPlaylist;