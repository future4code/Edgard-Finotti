import logo from './logo.svg';
import './App.css';
import DadosGerais from './components/DadosGerais/DadosGerais';


function App() {
  return (
    <div className="App">
      <DadosGerais 
        titulo= {"ETAPA 1 - DADOS GERAIS"}
        perguntaNome= {"1. Qual o seu nome ?" }
        perguntaIdade= {"2. Qual a sua idade ?" }
        perguntaEmail= {"3. Qual o seu email ?" } 
        perguntaEscolaridade= {"4. Qual a sua escolaridade ?"}
      />
    </div>
  );
}

export default App;
