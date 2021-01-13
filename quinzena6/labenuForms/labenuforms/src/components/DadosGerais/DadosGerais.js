import React  from 'react'

class DadosGerais extends React.Component {

    state = {
        nome: "",
        idade: "",
        email: "",
        escolaridade: ""
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

    enviaEtapa1 = () => {
        console.log(this.state)
    }

    render() {

        return <div>
            <h2>{this.props.titulo}</h2>

            <p>{this.props.perguntaNome}</p>
            <input 
                value={this.state.nome}
                onChange={this.onChangeNome}
            />

            <p>{this.props.perguntaIdade}</p>
            <input 
                value={this.state.idade}
                onChange={this.onChangeIdade}
            />

            <p>{this.props.perguntaEmail}</p>
            <input 
                value={this.state.email}
                onChange={this.onChangeEmail}
            />

            <p>{this.props.perguntaEscolaridade}</p>
            <select>
                <option value="medioIncompleto" selected>Ensino Médio Incompleto</option>
                <option value="medioCompleto">Ensino Médio Completo</option>
                <option value="superiorIncompleto">Ensino Superior Incompleto</option>
                <option value="superiorCompleto">Ensino Superior Completo</option>

            </select>

            <button onClick={this.enviaEtapa1}>Próxima Etapa</button>
        </div>
        
    }
}

export default DadosGerais