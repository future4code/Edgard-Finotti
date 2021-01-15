import React from 'react'
import styled from 'styled-components'

export class AdicionarTarefas extends Component {

    state = {
        tarefa: ""
    }

    onChangeTarefa = (event) => {
		this.setState({
			tarefa: event.target.value
		})
		
    }
    
    enviarTarefa = () => {
        
    }

    render() {

        return <div>
            <input 
                value={this.state.tarefa}
                onChange={this.onChangeTarefa}
            />

            <button onClick={this.enviarTarefa}>Adicionar</button>
        </div>

    }

}