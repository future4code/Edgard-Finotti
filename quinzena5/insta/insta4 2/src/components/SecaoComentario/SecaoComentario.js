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
		valorInputComentario: "",
		comentado: false
	}

	onChangeComentario = (event) => {
		this.setState({
			valorInputComentario: event.target.value
		})
		
	}


	enviaComentario = () => {
		this.props.aoEnviar(this.state.valorInputComentario)
	}
	

	render() {

		return (
			<div>
				<ContainerComentario>
					<CampoComentario
						placeholder={'Comentário'}
						value={this.state.valorInputComentario}
						onChange={this.onChangeComentario}
					/>
					<button onClick={this.enviaComentario}>Enviar</button>	
				</ContainerComentario>
				
			</div>
			
		) 

	}

}
