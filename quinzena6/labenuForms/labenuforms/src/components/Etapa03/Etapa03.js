import React  from 'react'
import styled from 'styled-components'

const DivisaoEtapa3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Titulo = styled.h2`
    
`

const Pergunta = styled.p`

`

const InputPergunta = styled.input`

`

const SelectCursoComplementar = styled.select`

`
const ButtonProximaEtapa = styled.button`
    margin-top: 40px;
`

class Etapa03 extends React.Component {

    state = {
        motivoNãoTerminou: "",
        cursoComplementar: "nenhum"
    }

    onChangeMotivo = (event) => {
        this.setState({
            motivoNãoTerminou: event.target.value
        })
    }

    onChangeSelect = (event) => {
        this.setState({cursoComplementar: event.target.value})
    }

    enviaDados = () => {
        this.props.aoEnviar(this.state)
    }

    render()  {
        return <DivisaoEtapa3>
            <Titulo>{this.props.titulo}</Titulo>

            <Pergunta>{this.props.perguntaMotivoNãoTerminou}</Pergunta>
            <InputPergunta 
                value={this.state.motivoNãoTerminou}
                onChange={this.onChangeMotivo}
            />

            <Pergunta>{this.props.perguntaCursoComplementar}</Pergunta>
            <SelectCursoComplementar value={this.state.cursoComplementar} onChange={this.onChangeSelect} >
                <option value="nenhum" >Nenhum</option>
                <option value="tecnico">Curso Técnico</option>
                <option value="ingles">Curso de Inglês</option>
            </SelectCursoComplementar>

            <ButtonProximaEtapa onClick={this.enviaDados}>Próxima Etapa</ButtonProximaEtapa> 
        </DivisaoEtapa3>
    }


}

export default Etapa03