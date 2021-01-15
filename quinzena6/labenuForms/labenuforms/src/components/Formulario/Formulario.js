import React  from 'react'
import Etapa01 from '../Etapa01/Etapa01'
import Etapa02 from '../Etapa02/Etapa02'
import Etapa03 from '../Etapa03/Etapa03'
import Etapa04 from '../Etapa04/Etapa04'

class Formulario extends React.Component {

    state = {
        nome: "",
        idade: "",
        email: "",
        escolaridade: "",

        curso: "",
        unidade:"",

        motivoNaoFezCurso: "",
        cursoComplementar: ""
    }

    aoEnviarEtapa01 = (objeto) => {
        
        this.setState({
            nome: objeto.nome,
            idade: objeto.idade,
            email: objeto.email,
            escolaridade: objeto.escolaridade
        })
    }

    aoEnviarEtapa02 = (objeto) => {
        this.setState({
            curso: objeto.curso,
            unidade: objeto.unidade    
        })
        
    }

    aoEnviarEtapa03 = (objeto) => {
        this.setState({
            motivoNaoFezCurso: objeto.motivoNãoTerminou,
            cursoComplementar: objeto.cursoComplementar    
        })
    }

    render() {
        console.log(this.state)
        let componenteFormulario
        if(this.state.escolaridade === "") {
            componenteFormulario = <Etapa01 
                titulo= {"ETAPA 1 - DADOS GERAIS"}
                perguntaNome= {"1. Qual o seu nome ?" }
                perguntaIdade= {"2. Qual a sua idade ?" }
                perguntaEmail= {"3. Qual o seu email ?" } 
                perguntaEscolaridade= {"4. Qual a sua escolaridade ?"}  
                aoEnviar={this.aoEnviarEtapa01}
            />
        } else if(this.state.escolaridade === "superiorIncompleto" || this.state.escolaridade === "superiorCompleto" ) {
            componenteFormulario = <Etapa02
                titulo={"ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR"}
                perguntaCurso= {"5. Qual curso?"}
                perguntaUnidade= {"6. Qual a unidade de ensino?"}
                aoEnviar={this.aoEnviarEtapa02}
            /> 
        }else if(this.state.escolaridade === "medioIncompleto" || this.state.escolaridade === "medioCompleto" ) {
            componenteFormulario = <Etapa03 
                titulo={"ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO"}
                perguntaMotivoNãoTerminou={"5. Por que você não iniciou um curso de graduação?"}
                perguntaCursoComplementar={"6. Você fez algum curso complementar?"}
                aoEnviar={this.aoEnviarEtapa03}
            />
        }else if(this.state.etapaFormulario === 4) {
            componenteFormulario = <Etapa04
                titulo={"O FORMULÁRIO ACABOU"}
                textoAgradecimento={"Muito obrigado por participar! Entraremos em contato!"}
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