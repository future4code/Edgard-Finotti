import React from 'react'
import './BotoesCompartilhar.css'

export function BotoesCompartilhar(props) {
    return <button onClick={props.onClickButton}><img alt="Imagem-Compartilhar" src={props.imagem}></img></button>
}