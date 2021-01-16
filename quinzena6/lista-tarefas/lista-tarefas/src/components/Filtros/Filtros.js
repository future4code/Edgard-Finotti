import React from 'react'
import styled from 'styled-components'

const DivisaoFiltros = styled.div`
   
`

const ParagrafoTextoFiltro = styled.p`
     display: inline-block;
     margin-right: 16px;

     
`

const SelectFiltros = styled.select`
  
`

const ParagrafoFiltroTarefa = styled.p`
    text-decoration: ${props => props.traco ? "line-through" : "none"   };
`

export class Filtros extends React.Component {

    state = {
       valorSelect: "pendente" 
    }


    onChangeSelect = (event) => {
		this.setState({
			valorSelect: event.target.value
		})
		
    }

    onClickTarefa = (tarefaId) => {
        this.props.onClickTarefa(tarefaId)
    }

    adicionaEstilizacao = (statusObjetoCompleto) => {
        if(statusObjetoCompleto === true) {
             return "text-decoration:line-through"
        }
    }
    
    render() {
        

        let componenteFiltro
        if(this.state.valorSelect === "nenhum") {
            let listaFiltroTodos = this.props.tarefas.map((tarefa) => {
                return <ParagrafoFiltroTarefa traco={tarefa.completo} key={tarefa.id} onClick={() => this.onClickTarefa(tarefa.id) } >{tarefa.texto}</ParagrafoFiltroTarefa>
            })
            componenteFiltro = <div>{listaFiltroTodos}</div>
        }

        if(this.state.valorSelect === "pendente") {
            let listaFiltroPendentes = this.props.tarefas.filter((tarefa) => {
                if(tarefa.completo === false) {
                    return true
                }
                return false
            })
            
            let lista = listaFiltroPendentes.map((tarefa) => {
                return <ParagrafoFiltroTarefa traco={tarefa.completo} key={tarefa.id} onClick={() => this.onClickTarefa(tarefa.id)}>{tarefa.texto}</ParagrafoFiltroTarefa>
            })
            componenteFiltro = <div>{lista}</div>
        } 

        if(this.state.valorSelect === "completa") {
            
            let listaFiltroCompletas = this.props.tarefas.filter((tarefa) => {
                if(tarefa.completo === true) {
                    return true
                }
                return false
            })
            let lista = listaFiltroCompletas.map((tarefa) => {
                return <ParagrafoFiltroTarefa traco={tarefa.completo} key={tarefa.id} onClick={() => this.onClickTarefa(tarefa.id)}>{tarefa.texto}</ParagrafoFiltroTarefa>
            })
            componenteFiltro = <div>{lista}</div>
        }

        return <DivisaoFiltros>
           <ParagrafoTextoFiltro>Filtro:</ParagrafoTextoFiltro>
           <SelectFiltros value={this.state.valorSelect} onChange={this.onChangeSelect} >
                <option value="nenhum">Nenhum</option>
                <option value="pendente">Pendentes</option>
                <option value="completa">Completas</option>
           </SelectFiltros>
            {componenteFiltro}
            
            
        </DivisaoFiltros>

    }

}