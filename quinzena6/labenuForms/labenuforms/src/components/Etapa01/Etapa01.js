import React  from 'react'
import styled from 'styled-components'
import Etapa02 from '../Etapa02/Etapa02'

const ContainerDadosGerais = styled.div`
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
const SelectEscolaridade = styled.select`

`

const ButtonProximaEtapa = styled.button`
    margin-top: 40px;
`

class Etapa01 extends React.Component {

    state = {
        nome: "",
        idade: "",
        email: "",
        escolaridade: "medioCompleto"

    }

    onChangeNome = (event) => {
        this.setState({
            nome: event.target.value
        })
    }

    onChangeIdade = (event) => {
        this.setState({
            idade: event.target.value
        })
    }

    onChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    onChangeEscolaridade = (event) => {
        this.setState({
            escolaridade: event.target.value
        })
    }

    onChangeSelect = (event) => {
        this.setState({escolaridade: event.target.value})
    }
    
    enviaDados = () => {
        this.props.aoEnviar(this.state)
    }

    render() {

        return <ContainerDadosGerais>
            <Titulo>{this.props.titulo}</Titulo>

            <Pergunta>{this.props.perguntaNome}</Pergunta>
            <InputPergunta 
                value={this.state.nome}
                onChange={this.onChangeNome}
            />

            <Pergunta>{this.props.perguntaIdade}</Pergunta>
            <InputPergunta 
                value={this.state.idade}
                onChange={this.onChangeIdade}
            />

            <Pergunta>{this.props.perguntaEmail}</Pergunta>
            <InputPergunta
                value={this.state.email}
                onChange={this.onChangeEmail}
            />

            <Pergunta>{this.props.perguntaEscolaridade}</Pergunta>
            <SelectEscolaridade value={this.state.escolaridade} onChange={this.onChangeSelect}>
                <option value="medioIncompleto" >Ensino Médio Incompleto</option>
                <option value="medioCompleto">Ensino Médio Completo</option>
                <option value="superiorIncompleto">Ensino Superior Incompleto</option>
                <option value="superiorCompleto">Ensino Superior Completo</option>

            </SelectEscolaridade>
            {/* <ComponenteSelecao/> */}


            <ButtonProximaEtapa onClick={this.enviaDados}>Próxima Etapa</ButtonProximaEtapa>
        </ContainerDadosGerais>
        
    }
}

export default Etapa01