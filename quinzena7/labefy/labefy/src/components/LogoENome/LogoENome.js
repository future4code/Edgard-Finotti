import React from 'react'
import {DivisaoLogoNome, ImagemLogo, Nome} from './stylesLogoENome'

const  LogoENome = (props) => {


    return (
      <DivisaoLogoNome>
          <ImagemLogo src={props.imagem} />
          <Nome>{props.nome}</Nome>
      </DivisaoLogoNome>
    );
  }
  
  export default LogoENome;