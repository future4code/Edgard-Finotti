import styled from 'styled-components'

export const DivisaoPlaylists = styled.div`
  display: flex;
  flex-direction: column;
  
  
`
export const DivisaoTitulo = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Titulo = styled.h3`
  color: white;
  justify-self: end;
`

export const ConteudoPlaylist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 0 16px;

  border-bottom: 1px solid white;

`


export const DivisaoPlaylist = styled.div`
  background-color: #202124;

  /* width: 200px;
  height: 200px; */

  border-radius: 8px;

  margin: 16px 32px;

  padding: 0 16px;

`



export const NomePlaylist = styled.h4`
  color: whitesmoke;
  
  
`

export const TituloMusicasPlaylist = styled.h3`
  color: white;
  text-align: center;
`



export const DivisaoMusicasPlaylist = styled.div`
    display: flex;
    flex-wrap: wrap;
`