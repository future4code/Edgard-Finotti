import React from 'react'
import styled from 'styled-components'

const DivisaoAdicionarTarefas = styled.div`

`

const CampoTarefa = styled.input`

`

const BotaoAdicionarTarefa = styled.button`
    margin-left: 16px;
`

export class AdicionarTarefas extends React.Component {

    state = {
        tarefa: ""
    }

    onChangeTarefa = (event) => {
		this.setState({
			tarefa: event.target.value
		})
		
    }
    
    enviarTarefa = () => {
        this.props.criarTarefa(this.state.tarefa)
        
        this.setState({
			tarefa: ""
		})
    }

    render() {
        
        return <DivisaoAdicionarTarefas>
            <CampoTarefa 
                value={this.state.tarefa}
                onChange={this.onChangeTarefa}
            />

            <BotaoAdicionarTarefa onClick={this.enviarTarefa}>Adicionar</BotaoAdicionarTarefa>
        </DivisaoAdicionarTarefas>

    }

}