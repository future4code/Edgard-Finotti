import React from 'react'
import styled from 'styled-components'


/* ================ STYLED COMPONENTS: ================ */
const DivisaoIconesCompartilhar = styled.div`
	height: 100%;
    display: flex;
    align-items: center;
`
const ImagemIconeCompartilhar = styled.img`
	height: 60%;
`

export function IconeCompartilhar(props) {
    return <DivisaoIconesCompartilhar>
		<ImagemIconeCompartilhar alt={'Icone-Compartilhar'} src={props.icone} onClick={props.onClickIcone}/>
	</DivisaoIconesCompartilhar>
}