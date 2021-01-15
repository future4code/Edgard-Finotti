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

export class Filtros extends React.Component {

    state = {
        
    }

    
    render() {
        
        return <DivisaoFiltros>
           <ParagrafoTextoFiltro>Filtro:</ParagrafoTextoFiltro>
           <SelectFiltros >
                <option value="nenhum">Nenhum</option>
                <option value="pendente">Pendentes</option>
                <option value="completa">Completas</option>
           </SelectFiltros>
        </DivisaoFiltros>

    }

}