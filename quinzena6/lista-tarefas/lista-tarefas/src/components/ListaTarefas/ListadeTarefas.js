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

    render() {
        console.log(this.state)
        return <div>
            <h2>Lista de Tarefas</h2>
            <AdicionarTarefas 
                criarTarefa={this.criarTarefa}
            />
            <Filtros
                tarefas={this.state.tarefas}
            />
        </div>

    }
}