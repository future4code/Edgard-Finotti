import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imagemPerfil  from './imagem/foto.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imagemPerfil}
          nome="Edgard Finotti Neto" 
          descricao="Sou apaixonado por tecnologia e principalmente programação, durante minha jornada profissional acabei me afastando da área de tecnologia, porém esse ano estou decidido a voltar para área e trabalhar com programação, atualmente estou realizando alguns cursos para me aperfeiçoar e conseguir uma oportunidade nessa área."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://www.flaticon.com/svg/static/icons/svg/1782/1782765.svg"
          textoTipo="Email: "
          email="edgardfinotti@yahoo.com.br"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://www.flaticon.com/premium-icon/icons/svg/1009/1009850.svg"
          textoTipo="Endereço:"
          email="Rua Labenu."
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png" 
          nome="IBM Brasil – Indústria e Máquinas e Serviços LTDA." 
          descricao="Responsável em prestar suporte a determinados clientes, resolução de incidentes quando possível em primeiro nível, geração de solicitações e chamados de  problemas para  os responsáveis, com atividades que envolvem tanto o suporte ao hardware como também de a alguns sistemas específicos e básico de administração de usuário." 
        />
        
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/proxy/196HOg0F0i3LPBh50rHLR_A8toHe6_Xz9cEqXm1xVRh1LAvn5F10PRNhY763ezueXSLnZdzdbketHfS1J4E8FsFAAxYxjV6m25jXcwr9LeROC8cdaL4-uikCMuSLweoFZkyzCkgK6o4ORoCJ3Q" 
          nome="Sonda Procwork Infomática LTDA (Terceirizado IBM)." 
          descricao="Responsável em prestar suporte de primeiro nível, resolução de problemas de hardware e configuração  de  software,  e  geração  de  chamados  referentes  a  aplicações  comerciais como o Sap." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://www.flaticon.com/svg/static/icons/svg/145/145807.svg" 
          texto="Linkedin" 
        />        

        <ImagemButton 
          imagem="https://www.flaticon.com/svg/static/icons/svg/733/733553.svg" 
          texto="GitHub" 
        />        
      </div>
    </div>
  );
}

export default App;
