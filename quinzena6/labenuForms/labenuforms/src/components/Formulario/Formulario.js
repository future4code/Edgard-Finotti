import React  from 'react'
import DadosGerais from '../DadosGerais/DadosGerais'
import InformacoesEnsinoSuperior from '../InformacoesEnsinoSuperior/InformacoesEnsinoSuperior'

class Formulario extends React.Component {

    state = {
        etapaFormulario: 1
    }

    aoEnviar = () => {
        this.setState({etapaFormulario: Number(this.state.etapaFormulario) + 1})
    }

    render() {

        let componenteFormulario
        if(this.state.etapaFormulario === 1) {
            componenteFormulario = <DadosGerais 
                titulo= {"ETAPA 1 - DADOS GERAIS"}
                perguntaNome= {"1. Qual o seu nome ?" }
                perguntaIdade= {"2. Qual a sua idade ?" }
                perguntaEmail= {"3. Qual o seu email ?" } 
                perguntaEscolaridade= {"4. Qual a sua escolaridade ?"}  
                onClick={this.aoEnviar}
            />
        } else if(this.state.etapaFormulario === 2) {
            componenteFormulario = <InformacoesEnsinoSuperior
                titulo={"ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR"}
                perguntaCurso= {"5. Qual curso?"}
                perguntaUnidade= {"6. Qual a unidade de ensino?"}
            /> 
        }



        return (
            <div>
                {componenteFormulario}
            </div>

        )

    }
}

export default Formulario