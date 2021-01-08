import React from 'react'
import './IconeCompartilhar.css'

export function IconeCompartilhar(props) {
    return <div className={'icon-compartilhar'}>
		<img alt={'Icone-Compartilhar'} src={props.icone} onClick={props.onClickIcone}/>
	</div>
}