import React  from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

import iconeSalvarBranco from '../../img/iconeSalvarInstagramDesmarcado.png'
import iconeSalvarPreto from '../../img/iconeSalvarInstagramMarcado.png'
import iconeShare  from '../../img/icone-compartilhar-insta.png'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { IconeSalvar } from '../IconeSalvar/IconeSalvar'

import iconeTwitter from '../../img/TwitterLogo.svg' 
import iconeFacebook from '../../img/FacebookLogo.svg' 
import iconeInstagram from '../../img/InstagramLogo.svg' 


import {IconeCompartilhar} from '../IconeCompartilhar/IconeCompartilhar'
import { BotoesCompartilhar } from '../BotoesCompartilhar/BotoesCompartilhar'
 

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhar: false,
    mensagemCompartilhar: ""
  }

  onClickCurtida = () => {
    if(!this.state.curtido) {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
    
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }

  
  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  onClickButton = (nomeRedeSocial, textoCompartilhamento) => {
    console.log("Postagem combinada no ", nomeRedeSocial, " com uma mensagem: ", textoCompartilhamento)
  }

  onChangeInputCompartilhar = (event) => {
    this.setState({
      mensagemCompartilhar: event.target.value
    })
  }

  render() {
    let iconeCurtida
    let IconeSalvo

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componentePostSalvo
    if(this.state.salvo) {
      IconeSalvo = iconeSalvarPreto
      componentePostSalvo = <span>Salvo</span>
    } else {
      IconeSalvo = iconeSalvarBranco
    }
    
    let componenteComentario
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar
    if(this.state.compartilhar) {
      componenteCompartilhar = <div className="compartilhar">
        <h3>Compartilhe:</h3>
        <input 
          placeholder="Mensagem Comentário"
          value={this.state.mensagemCompartilhar}
          onChange={this.onChangeInputCompartilhar}
        />
        <div className={'itens-compartilhar'}>
          <BotoesCompartilhar
            imagem= {iconeFacebook}
            onClickButton={() => this.onClickButton("Facebook", this.state.mensagemCompartilhar)}
          />
          <BotoesCompartilhar
            imagem= {iconeInstagram}
            onClickButton={() => this.onClickButton("Instagram", this.state.mensagemCompartilhar)}
          />
          <BotoesCompartilhar
            imagem= {iconeTwitter}
            onClickButton={() => this.onClickButton("Twitter", this.state.mensagemCompartilhar)}
          />
        </div>
      </div>
    }

    return <div className={'post-container'}>
          <div className={'post-header'}>
            <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
            <p>{this.props.nomeUsuario}</p>
          </div>

          <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

          <div className={'post-footer'}>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />

            <IconeCompartilhar 
              icone={iconeShare}
              onClickIcone={this.onClickCompartilhar}
            />

            <IconeSalvar 
              icone={IconeSalvo}
              onClickIcone={this.onClickSalvar}
            />

            
          </div>
          {componenteComentario}
          {componentePostSalvo}
          {componenteCompartilhar}
        </div>

      
  }
}

export default Post