import React from 'react'
import { DivisaoPlaylists, DivisaoPlaylist, NomePlaylist, Titulo, ConteudoPlaylist, DivisaoTitulo, TituloMusicasPlaylist, DivisaoMusicasPlaylist, DivisaoTituloMusicas, ImagemAdicionarMusicaPlaylist, ImagemLoading, MensagemListaMusicasVazia, ConteudoAdicionarMusica, ConteudoMusicas } from './stylesPlaylist'
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
import { SecaoAdicionarMusica } from '../SecaoAdiconarMusica/SecaoAdicionarMusica'



export class Playlist extends React.Component {

    state = {
       playlists: [],
       musicas: [],
       exibirMusicas: false,
       adicionarMusica: false,
       nomePlaylistSelecionada: "",
       idPlaylistSelecionada: "",
       autorizacao: ""
    }

    componentDidMount() {
        // this.setState( {autorizacao : this.props.autorizacao} )
        this.pegarPlaylists();

    }

    

    pegarPlaylists = async () => {
        const autorizacao = this.props.autorizacao
        try {
            const resposta = await axios.get(`${BASE_URL}/playlists`, {
                headers: {
                    "Authorization": autorizacao
                }    
            }
            );
            
            this.setState({ playlists: resposta.data.result.list });
        } catch (erro) {
          alert(erro.message);
        }
    };

    

    pegarMusicasPlaylist = async (id, nomePlaylist) => {
        const autorizacao = this.props.autorizacao
        try {
            const resposta = await axios.get(`${BASE_URL}/playlists/${id}/tracks`, {
                headers: {
                    "Authorization": autorizacao
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
        const autorizacao = this.props.autorizacao
        const resposta = window.confirm(`Confirmar exclusão da Playlist ${nomePlaylist}`)
        if(resposta){
            try { 
                const resposta = await axios.delete(`${BASE_URL}/playlists/${idPlaylist}`, {
                    headers: {
                        "Authorization": autorizacao
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
        const autorizacao = this.props.autorizacao
        const resposta = window.confirm("Confirmar exclusão da Musica ?")
        if(resposta){
            try {
                const resposta = await axios.delete(`${BASE_URL}/playlists/${idPlaylist}/tracks/${idMusica}`, {
                    headers: {
                        "Authorization": autorizacao
                    }    
                }
                );
                
                this.pegarMusicasPlaylist(idPlaylist, nomePlaylist)
                
            } catch (erro) {
              alert(erro.message);
            }
        }
        
    };

    exibirSecaoAdicionarMusica = () => {
        this.setState({ adicionarMusica : !this.state.adicionarMusica })
    }

    adicionarNovaMusicaPlaylist = async (nomeMusica, nomeArtista, link) => {
        const autorizacao = this.props.autorizacao
        const body = {
            name: nomeMusica,
            artist: nomeArtista,
            url: link
        }
        
        try {  
            const resposta = await axios.post(`${BASE_URL}/playlists/${this.state.idPlaylistSelecionada}/tracks/`, body ,{
                headers: {
                    "Authorization": autorizacao
                }    
            }
            );
            
            alert("Musica adicionada com sucesso.")
            this.setState( { adicionarMusica: false})
            this.pegarMusicasPlaylist(this.state.idPlaylistSelecionada, this.state.nomePlaylistSelecionada)
            
            
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
                    <ImagemAdicionarMusicaPlaylist src={iconeAddMusica} onClick={this.exibirSecaoAdicionarMusica} />
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
        
        let componenteAdicionarMusica
        if(this.state.adicionarMusica) {
            componenteAdicionarMusica = <SecaoAdicionarMusica 
                onClickAdicionarMusica = {this.adicionarNovaMusicaPlaylist}
            />
        }
        
        return <DivisaoPlaylists>
            <DivisaoTitulo>
                <Titulo>Suas Playlists:</Titulo>
                <BotaoAdicionarPlaylist 
                    imagemBotao={botaoAddPlaylist}
                    onClickBotaoCriarPlaylist={this.pegarPlaylists}
                    autorizacao={this.state.autorizacao}
                />
            </DivisaoTitulo>
            
            <ConteudoPlaylist>
                {this.state.playlists.length > 0 ? componenteListagemPlaylist : <ImagemLoading src={animacaoLoading} />}
            </ConteudoPlaylist>

            {componenteTituloMusicasPlaylist}
            <DivisaoMusicasPlaylist>
                <ConteudoMusicas>
                    {componenteMusicasPlaylist}
                </ConteudoMusicas>
                
                <ConteudoAdicionarMusica>
                    {componenteAdicionarMusica}
                </ConteudoAdicionarMusica>
                
            </DivisaoMusicasPlaylist>
            

        </DivisaoPlaylists>


    }



}