import React from 'react'
import { DivisaoAdicionarPlaylist, ImagemAdicionarPlaylist } from './stylesBotaoAdicionarPlaylist'
import { SecaoAdicionarPlaylist } from '../SecaoAdicionarPlaylist/SecaoAdicionarPlaylist'



export class BotaoAdicionarPlaylist extends React.Component {

    state = {
       adicionarPlaylist:  false
    }

    botaoAdicionarPlaylist = () => {
        this.setState({ adicionarPlaylist: !this.state.adicionarPlaylist})
    }

    onClickCriarPlaylist = () => {
        this.setState({ adicionarPlaylist: false})
        this.props.onClickBotaoCriarPlaylist()
    }
    

    render() {

        let componenteAdicionarPlaylist
        if(this.state.adicionarPlaylist) {
            componenteAdicionarPlaylist = <SecaoAdicionarPlaylist 
                onClick={this.onClickCriarPlaylist}
                autorizacao={this.props.autorizacao}

            />
        }

        
        return <DivisaoAdicionarPlaylist>
            <ImagemAdicionarPlaylist src={this.props.imagemBotao} onClick={this.botaoAdicionarPlaylist} ></ImagemAdicionarPlaylist>
            {componenteAdicionarPlaylist}
        </DivisaoAdicionarPlaylist>


    }



}