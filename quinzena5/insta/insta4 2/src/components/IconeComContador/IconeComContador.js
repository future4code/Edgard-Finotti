import React from 'react'
import styled from 'styled-components'


/* ================ STYLED COMPONENTS: ================ */
const DivisaoIconeComContador = styled.div`
	display: flex;
`
const ImagemIconeComContador = styled.img`
	margin-right: 5px;
`

export function IconeComContador(props) {
	return <DivisaoIconeComContador>
		<ImagemIconeComContador alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</DivisaoIconeComContador>
}
