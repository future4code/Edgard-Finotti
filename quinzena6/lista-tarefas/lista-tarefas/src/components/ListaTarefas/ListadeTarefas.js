import React from 'react'
import styled from 'styled-components'
import { AdicionarTarefas } from '../AdicionarTarefas/AdicionarTarefas'

export class ListadeTarefas extends Component {
    state = {
        tarefas: [
            {
                
            }
        ],

        novaTarefa: ""
    }

    render() {

        return <div>
            <h2>Lista de Tarefas</h2>
            <AdicionarTarefas />
        </div>

    }
}