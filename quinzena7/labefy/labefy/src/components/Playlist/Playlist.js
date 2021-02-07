import React from 'react'
import { DivisaoPlaylists, DivisaoPlaylist, NomePlaylist, Titulo, ConteudoPlaylist, DivisaoTitulo } from './stylesPlaylist'
import { BASE_URL } from '../../constants/requisicoes'
import axios from 'axios'
import { BotaoAdicionarPlaylist } from '../BotaoAdicionarPlaylist/BotaoAdicionarPlaylist'
import botaoAddPlaylist from '../../assets/playlist.svg'
import { OpcoesPlaylist } from '../OpcoesPlaylist/OpcoesPlaylist'
import iconeExcluirPlaylist from '../../assets/remove.svg'
import iconeExibirMusicasPlaylist from '../../assets/folder.svg'



export class Playlist extends React.Component {

    state = {
       playlists: []
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
    

    render() {
        
        const componenteListagemPlaylist = this.state.playlists.map(playlist => {
            return <DivisaoPlaylist key={playlist.id}>
                <NomePlaylist>{playlist.name}</NomePlaylist>
                <OpcoesPlaylist 
                    imagemExcluirPlaylist={iconeExcluirPlaylist}
                    imagemExibirMusicasPlaylist={iconeExibirMusicasPlaylist}
                    onClickBotaoVerMusicas={}
                    onClickExcluirPlaylist={}
                />
            </DivisaoPlaylist>
        })
        
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
            
        </DivisaoPlaylists>


    }



}