import React from 'react'
import styled from 'styled-components'
import { AdicionarTarefas } from '../AdicionarTarefas/AdicionarTarefas'
import { Filtros } from '../Filtros/Filtros'

export class ListadeTarefas extends React.Component {
    state = {
        tarefas: [ ]
    }

    criarTarefa = (novaTarefa) => {
        const novoObjetoTarefa = {
            texto: novaTarefa,
            completo: false,
            id: Date.now()
        }

        const novasTarefas = [novoObjetoTarefa, ...this.state.tarefas]

       this.setState({ tarefas: novasTarefas })

    }

    alterarTarefa = (tarefaId) => {
        const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
            if(tarefa.id === tarefaId) {
               const novaTarefa = {
                   ...tarefa,
                   completo: !tarefa.completo
               } 
               return novaTarefa
            } else {
                return tarefa
            }
        })

        this.setState({ tarefas: novaListaDeTarefas})
    }

    render() {
        console.log(this.state)
        return <div>
            <h2>Lista de Tarefas</h2>
            <AdicionarTarefas 
                criarTarefa={this.criarTarefa}
            />
            <Filtros
                tarefas={this.state.tarefas}
                onClickTarefa = {this.alterarTarefa}
            />
        </div>

    }
}