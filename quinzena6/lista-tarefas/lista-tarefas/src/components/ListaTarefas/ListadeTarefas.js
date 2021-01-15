import React from 'react'
import styled from 'styled-components'
import { AdicionarTarefas } from '../AdicionarTarefas/AdicionarTarefas'

export class ListadeTarefas extends React.Component {
    state = {
        tarefas: [
           
        ],

        // posicaoArray: 0,
        novaTarefa: ""
    }

    criarTarefa = (novaTarefa) => {
        const novoObjetoTarefa = {
            texto: novaTarefa
        }

        const novasTarefas = [novoObjetoTarefa, ...this.state.tarefas]

       this.setState({ tarefas: novasTarefas })
    }

    render() {
        console.log(this.state)
        return <div>
            <h2>Lista de Tarefas</h2>
            <AdicionarTarefas 
                criarTarefa={this.criarTarefa}
            />
        </div>

    }
}