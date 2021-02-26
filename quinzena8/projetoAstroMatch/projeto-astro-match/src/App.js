import logo from './logo.svg';
import './App.css';
import { TelaPrincipal } from './screens/TelaPrincipal/TelaPrincipal';

function App() {
  document.title = "AstroMatch"
  
  return (
    <div className="App">
      <TelaPrincipal />
    </div>
  );
}

export default App;
