import React, {Component} from 'react'
import styled from 'styled-components'


/* ================ STYLED COMPONENTS: ================ */
const ContainerComentario = styled.div`
	display: flex;
    justify-content: center;
    padding: 5px;
`

const CampoComentario = styled.input`
	width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		textoComentario: ""
	}

	onChangeComentario = (event) => {
		this.setState({
			textoComentario: event.target.value
		})
	}

	render() {
		return <ContainerComentario>
			<CampoComentario
				placeholder={'Comentário'}
				value={this.state.textoComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</ContainerComentario>
	}
}
