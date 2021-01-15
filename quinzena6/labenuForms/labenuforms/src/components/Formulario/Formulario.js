import React  from 'react'
import Etapa01 from '../Etapa01/Etapa01'
import Etapa02 from '../Etapa02/Etapa02'
import Etapa03 from '../Etapa03/Etapa03'
import Etapa04 from '../Etapa04/Etapa04'

class Formulario extends React.Component {

    state = {
        etapaFormulario: 1,
        nome: "",
        idade: "",
        email: "",
        escolaridade: 'superiorIncompleto'
    }

    aoEnviarEtapa01 = (objeto) => {
        
        this.setState({
            etapaFormulario: Number(this.state.etapaFormulario) + 1,
            nome: objeto.nome,
            idade: objeto.idade,
            email: objeto.email,
            escolaridade: objeto.escolaridade
        })
    }

    render() {
        console.log(this.state)
        let componenteFormulario
        if(this.state.etapaFormulario === 1) {
            componenteFormulario = <Etapa01 
                titulo= {"ETAPA 1 - DADOS GERAIS"}
                perguntaNome= {"1. Qual o seu nome ?" }
                perguntaIdade= {"2. Qual a sua idade ?" }
                perguntaEmail= {"3. Qual o seu email ?" } 
                perguntaEscolaridade= {"4. Qual a sua escolaridade ?"}  
                aoEnviar={this.aoEnviarEtapa01}
            />
        } else if(this.state.etapaFormulario === 2) {
            componenteFormulario = <Etapa02
                titulo={"ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR"}
                perguntaCurso= {"5. Qual curso?"}
                perguntaUnidade= {"6. Qual a unidade de ensino?"}
                onClick={this.aoEnviar}
            /> 
        }else if(this.state.etapaFormulario === 3) {
            componenteFormulario = <Etapa03 
                titulo={"ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO"}
                perguntaMotivoNãoTerminou={"5. Por que você não terminou um curso de graduação?"}
                perguntaCursoComplementar={"6. Você fez algum curso complementar?"}
                onClick={this.aoEnviar}
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