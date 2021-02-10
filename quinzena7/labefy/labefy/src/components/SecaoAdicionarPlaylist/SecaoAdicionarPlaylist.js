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
    
    criarPlaylist = async () => {
        const autorizacao = this.props.autorizacao
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
                    "Authorization": autorizacao
                  }
                }
            )
            this.setState({ inputNomePlaylist: "" });
            this.props.onClick()
        } catch (erro) {
            alert(erro.message);
        }
    }
    
    

    render() {
        
        return <DivisaoAdicionarPlaylist>
            <InputNomePlaylist onChange={this.onChangeInput} value={this.state.inputNomePlaylist}></InputNomePlaylist>
            <BotaoAdicionar onClick={this.criarPlaylist}>Criar</BotaoAdicionar>
        </DivisaoAdicionarPlaylist>

    }



}