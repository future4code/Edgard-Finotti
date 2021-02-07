import React from 'react'
import { DivisaoPlaylists, DivisaoPlaylist, NomePlaylist, Titulo, ConteudoPlaylist, DivisaoTitulo, TituloMusicasPlaylist, DivisaoMusicasPlaylist } from './stylesPlaylist'
import { BASE_URL } from '../../constants/requisicoes'
import axios from 'axios'
import { BotaoAdicionarPlaylist } from '../BotaoAdicionarPlaylist/BotaoAdicionarPlaylist'
import botaoAddPlaylist from '../../assets/playlist.svg'
import { OpcoesPlaylist } from '../OpcoesPlaylist/OpcoesPlaylist'
import iconeExcluirPlaylist from '../../assets/remove.svg'
import iconeExibirMusicasPlaylist from '../../assets/folder.svg'
import MusicasPlaylist from '../MusicasPlaylist/MusicasPlaylist'



export class Playlist extends React.Component {

    state = {
       playlists: [],
       musicas: [],
       nomePlaylistSelecionada: ""
    }

    componentDidMount() {
        this.pegarPlaylists();
    }

    pegarPlaylists = async () => {
        try {
            const resposta = await axios.get(`${BASE_URL}/playlists`, {
                headers: {
                    "Authorization": "edgard-finotti-muyembe"
                }    
            }
            );
            
            this.setState({ playlists: resposta.data.result.list });
        } catch (erro) {
          alert(erro.message);
        }
    };

    // verificaMusicaJaExiste = (playlistId, musicasPlaylist) => {
    //     console.log("playlistId, musicasPlaylist =", playlistId, musicasPlaylist)

    //     const playlist = this.state.musicas.filter((musica) => {
    //         if(playlistId === musica.idPlaylist) {
    //             return true
    //         }
    //         return false
    //     })
    //     if(playlist) {
    //         this.state.playlists.musicas.filter((musica) => {
    //             if(musicaId === musica.id) {
    //                 return true
    //             } 
    //             return false
    //         })
    //     }
    // }

    pegarMusicasPlaylist = async (id, nomePlaylist) => {
        
        try {
            const resposta = await axios.get(`${BASE_URL}/playlists/${id}/tracks`, {
                headers: {
                    "Authorization": "edgard-finotti-muyembe"
                }    
            }
            );
            
            this.setState({ musicas: resposta.data.result.tracks, nomePlaylistSelecionada: nomePlaylist } )
            
        } catch (erro) {
          alert(erro.message);
        }
    };
    

    render() {
        
        const componenteListagemPlaylist = this.state.playlists.map(playlist => {
            return <DivisaoPlaylist key={playlist.id}>
                <NomePlaylist>{playlist.name}</NomePlaylist>
                <OpcoesPlaylist 
                    imagemExcluirPlaylist={iconeExcluirPlaylist}
                    imagemExibirMusicasPlaylist={iconeExibirMusicasPlaylist}
                    onClickBotaoVerMusicas={() => this.pegarMusicasPlaylist(playlist.id, playlist.name)}
                    // onClickExcluirPlaylist={}
                />
            </DivisaoPlaylist>
        })

        let componenteMusicasPlaylist
        let componenteTituloMusicasPlaylist
        if(this.state.musicas.length > 0) {
            componenteTituloMusicasPlaylist = <TituloMusicasPlaylist>Músicas Playlist "{this.state.nomePlaylistSelecionada}"</TituloMusicasPlaylist>
            componenteMusicasPlaylist = this.state.musicas.map( musica => {
                return <MusicasPlaylist 
                    key={musica.id}
                    nome={musica.name}
                    url={musica.url}
                    artista={musica.artist}
                />
            })
        }
        
        
        return <DivisaoPlaylists>
            <DivisaoTitulo>
                <Titulo>Suas Playlists:</Titulo>
                <BotaoAdicionarPlaylist 
                    imagemBotao={botaoAddPlaylist}
                    onClickBotaoCriarPlaylist={this.pegarPlaylists}
                />
            </DivisaoTitulo>
            
            <ConteudoPlaylist>
                {componenteListagemPlaylist}
            </ConteudoPlaylist>

            {componenteTituloMusicasPlaylist}
            <DivisaoMusicasPlaylist>
                {componenteMusicasPlaylist}
            </DivisaoMusicasPlaylist>
            

        </DivisaoPlaylists>


    }



}