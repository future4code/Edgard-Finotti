import React from 'react'
import axios from 'axios'
import { DivisaoAdicionarPlaylist, BotaoAdicionar, InputNomePlaylist } from './stylesSecaoAdicionarPlaylist'
import { BASE_URL } from '../../constants/requisicoes'


export class SecaoAdicionarPlaylist extends React.Component {

    state = {
       inputNomePlaylist: ""
    }

    onChangeInput = (event) => {
        this.setState({ inputNomePlaylist: event.target.value})
    }
    
    
    // criarPlaylist = () => {
    //     const body = {
    //       name: this.state.inputNomePlaylist
    //     };
    
    //     axios
    //       .post(
    //         "${BASE_URL}/playlists",
    //         body,
    //         {
    //           headers: {
    //             Authorization: "edgard-finotti-muyembe"
    //           }
    //         }
    //       )
    //       .then(() => {
    //         this.setState({ inputNomePlaylist: "" });
            
            
    //       })
    //       .catch(() => {
    //         alert("Playlist não criada.");
    //     });
    // };

    criarPlaylist = async () => {
        console.log("this.state.inputNomePlaylist", this.state.inputNomePlaylist)
        const body = {
            name: this.state.inputNomePlaylist
        };
        console.log("body", body)
        try {
            const resposta = await axios.post(
                `${BASE_URL}/playlists`,
                body,
                {
                  headers: {
                    "Authorization": "edgard-finotti-muyembe"
                  }
                }
            )
            this.setState({ inputNomePlaylist: "" });
            this.props.onClick()
        } catch (erro) {
            alert(erro.message);
        }
    }
    
    // pegarPlaylists = async () => {
    //     try {
    //         const resposta = await axios.get(`${BASE_URL}/playlists`, {
    //             headers: {
    //                 "Authorization": "edgard-finotti-muyembe"
    //             }    
    //         }
    //         );
            
    //         this.setState({ playlists: resposta.data.result.list });
    //     } catch (erro) {
    //       alert(erro.message);
    //     }
    //   };
    

    render() {
        
        return <DivisaoAdicionarPlaylist>
            <InputNomePlaylist onChange={this.onChangeInput} value={this.state.inputNomePlaylist}></InputNomePlaylist>
            <BotaoAdicionar onClick={this.criarPlaylist}>Criar</BotaoAdicionar>
        </DivisaoAdicionarPlaylist>

    }



}