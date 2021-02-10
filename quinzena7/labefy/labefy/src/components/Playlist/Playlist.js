import React from 'react'
import { DivisaoPlaylists, DivisaoPlaylist, NomePlaylist, Titulo, ConteudoPlaylist, DivisaoTitulo, TituloMusicasPlaylist, DivisaoMusicasPlaylist, DivisaoTituloMusicas, ImagemAdicionarMusicaPlaylist, ImagemLoading, MensagemListaMusicasVazia } from './stylesPlaylist'
import { BASE_URL } from '../../constants/requisicoes'
import axios from 'axios'
import { BotaoAdicionarPlaylist } from '../BotaoAdicionarPlaylist/BotaoAdicionarPlaylist'
import botaoAddPlaylist from '../../assets/playlist.svg'
import { OpcoesPlaylist } from '../OpcoesPlaylist/OpcoesPlaylist'
import iconeExcluirPlaylist from '../../assets/remove.svg'
import iconeExibirMusicasPlaylist from '../../assets/folder.svg'
import MusicasPlaylist from '../MusicasPlaylist/MusicasPlaylist'
import iconeAddMusica from '../../assets/add-icon.svg'
import iconeDeletarMusica from '../../assets/delete-button.svg'
import animacaoLoading from '../../assets/animation-loading.gif'



export class Playlist extends React.Component {

    state = {
       playlists: [],
       musicas: [],
       exibirMusicas: false,
       nomePlaylistSelecionada: "",
       idPlaylistSelecionada: ""
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

    

    pegarMusicasPlaylist = async (id, nomePlaylist) => {
        
        try {
            const resposta = await axios.get(`${BASE_URL}/playlists/${id}/tracks`, {
                headers: {
                    "Authorization": "edgard-finotti-muyembe"
                }    
            }
            );
            
            this.setState({ musicas: resposta.data.result.tracks, 
                nomePlaylistSelecionada: nomePlaylist, 
                idPlaylistSelecionada: id, 
                exibirMusicas: true 
            } )
            
        } catch (erro) {
          alert(erro.message);
        }
    };
    
    excluirPlaylist = async (idPlaylist, nomePlaylist) => {
        const resposta = window.confirm(`Confirmar exclusão da Playlist ${nomePlaylist}`)
        if(resposta){
            try {
                const resposta = await axios.delete(`${BASE_URL}/playlists/${idPlaylist}`, {
                    headers: {
                        "Authorization": "edgard-finotti-muyembe"
                    }    
                }
                );
                
                this.pegarPlaylists()
                
            } catch (erro) {
              alert(erro.message);
            }
        }
        
    };

    deletarMusica = async (idMusica, idPlaylist, nomePlaylist) => {
        const resposta = window.confirm("Confirmar exclusão da Musica ?")
        if(resposta){
            try {
                const resposta = await axios.delete(`${BASE_URL}/playlists/${idPlaylist}/tracks/${idMusica}`, {
                    headers: {
                        "Authorization": "edgard-finotti-muyembe"
                    }    
                }
                );
                
                this.pegarMusicasPlaylist(idPlaylist, nomePlaylist)
                
            } catch (erro) {
              alert(erro.message);
            }
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
                    onClickExcluirPlaylist={() => this.excluirPlaylist(playlist.id, playlist.name)}
                />
            </DivisaoPlaylist>
        })

        let componenteMusicasPlaylist
        let componenteTituloMusicasPlaylist
        if(this.state.musicas.length > 0) {
            if(this.state.exibirMusicas) {
                componenteTituloMusicasPlaylist = <DivisaoTituloMusicas>
                    <TituloMusicasPlaylist>Músicas Playlist "{this.state.nomePlaylistSelecionada}"</TituloMusicasPlaylist>
                    <ImagemAdicionarMusicaPlaylist src={iconeAddMusica} />
                </DivisaoTituloMusicas> 
                componenteMusicasPlaylist = this.state.musicas.map( musica => {
                    return <MusicasPlaylist 
                        key={musica.id}
                        nome={musica.name}
                        url={musica.url}
                        artista={musica.artist}
                        iconeDeletar={iconeDeletarMusica}
                        onClickDeletarMusica={() => this.deletarMusica(musica.id, this.state.idPlaylistSelecionada, this.state.nomePlaylistSelecionada)}
                    />
                })
            } else {
                componenteMusicasPlaylist = <ImagemLoading src={animacaoLoading} />
            } 
        } 
        
        if(this.state.musicas.length === 0 && this.state.exibirMusicas === true){
            componenteMusicasPlaylist = <MensagemListaMusicasVazia>Lista de Músicas Vazia.</MensagemListaMusicasVazia>
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
                {this.state.playlists.length > 0 ? componenteListagemPlaylist : <ImagemLoading src={animacaoLoading} />}
            </ConteudoPlaylist>

            {componenteTituloMusicasPlaylist}
            <DivisaoMusicasPlaylist>
                {componenteMusicasPlaylist}
            </DivisaoMusicasPlaylist>
            

        </DivisaoPlaylists>


    }



}