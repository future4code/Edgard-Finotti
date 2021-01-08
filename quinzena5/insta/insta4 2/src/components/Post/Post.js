import React  from 'react'

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
import styled from 'styled-components'

/* ================ STYLED COMPONENTS: ================ */
const ContainerPosts = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const CabecalhoPost = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`
const RodapePost = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`
const FotoUsuario = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
const FotoPost = styled.img`
  width: 100%;
`
const DivisaoCompartilhar = styled.div`
  text-align: center;
  color: blue;
`

const ItemsCompartilhar = styled.div`
  height: 60px;
  
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const InformacaoSalvo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  color: blue;
  font-weight: bold;
`


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

    if(this.state.comentado) {

    }

    let componentePostSalvo
    if(this.state.salvo) {
      IconeSalvo = iconeSalvarPreto
      componentePostSalvo = <InformacaoSalvo>Salvo</InformacaoSalvo>
    } else {
      IconeSalvo = iconeSalvarBranco
    }
    
    let componenteComentario
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar
    if(this.state.compartilhar) {
      componenteCompartilhar = <DivisaoCompartilhar>
        <h3>Compartilhe:</h3>
        <input 
          placeholder="Mensagem Comentário"
          value={this.state.mensagemCompartilhar}
          onChange={this.onChangeInputCompartilhar}
        />
        <ItemsCompartilhar>
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
        </ItemsCompartilhar>
      </DivisaoCompartilhar>
    }

    return <ContainerPosts>
          <CabecalhoPost>
            <FotoUsuario src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
            <p>{this.props.nomeUsuario}</p>
          </CabecalhoPost>

          <FotoPost src={this.props.fotoPost} alt={'Imagem do post'}/>
          
          <RodapePost>
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

            
          </RodapePost>
          {componenteComentario}
          {componentePostSalvo}
          {componenteCompartilhar}
        </ContainerPosts>

      
  }
}

export default Post