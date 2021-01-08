import React from 'react'
import './IconeSalvar.css'

export function IconeSalvar(props) {
	return <div className={'icon-salvar'}>
		<img alt={'Icone-Salvar'} src={props.icone} onClick={props.onClickIcone}/>
	</div>
}