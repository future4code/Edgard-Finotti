import React from 'react'
import styled from 'styled-components'


/* ================ STYLED COMPONENTS: ================ */
const DivisaoIconeSalvar = styled.div`
	height: 100%;
    display: flex;
    align-items: center;	
`

const ImagemIconeSalvar = styled.img`
	height: 80%;
`

export function IconeSalvar(props) {
	return <DivisaoIconeSalvar>
		<ImagemIconeSalvar alt={'Icone-Salvar'} src={props.icone} onClick={props.onClickIcone}/>
	</DivisaoIconeSalvar>
}