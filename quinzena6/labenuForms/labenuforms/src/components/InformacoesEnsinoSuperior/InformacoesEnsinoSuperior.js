import React  from 'react'

class InformacoesEnsinoSuperior extends React.Component {

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
        return <div>
            <h2>{this.props.titulo}</h2>

            <p>{this.props.perguntaCurso}</p>
            <input 
                value={this.state.curso}
                onChange={this.onChangeCurso}
            />

            <p>{this.props.perguntaUnidade}</p>
            <input 
                value={this.state.unidade}
                onChange={this.onChangeUnidade}
            />

            <button>Próxima Etapa</button>
        </div>
    }
}

export default InformacoesEnsinoSuperior