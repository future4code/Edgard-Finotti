import React  from 'react'
import styled from 'styled-components'

const DivisaoEtapa2 = styled.div`
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

const BotaoProximaEtapa = styled.button`
    margin-top: 40px;
`

class Etapa02 extends React.Component {

    state = {
        curso: "",
        unidade: ""
    }

    onChangeCurso = (event) => {
        this.setState({
            curso: event.target.value
        })
    }

    onChangeUnidade = (event) => {
        this.setState({
            unidade: event.target.value
        })
    }


    render () {
        return <DivisaoEtapa2>
            <Titulo>{this.props.titulo}</Titulo>

            <Pergunta>{this.props.perguntaCurso}</Pergunta>
            <InputPergunta 
                value={this.state.curso}
                onChange={this.onChangeCurso}
            />

            <Pergunta>{this.props.perguntaUnidade}</Pergunta>
            <InputPergunta 
                value={this.state.unidade}
                onChange={this.onChangeUnidade}
            />

            <BotaoProximaEtapa onClick={this.props.onClick}>Próxima Etapa</BotaoProximaEtapa>
        </DivisaoEtapa2>
    }
}

export default Etapa02