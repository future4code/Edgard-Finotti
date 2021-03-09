import logo from './logo.svg';
import './App.css';
import { TelaPrincipal } from './screens/TelaPrincipal/TelaPrincipal';
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  document.title = "AstroMatch"

  return (
    <div className="App">
      <CssBaseline />
      <TelaPrincipal />
    </div>
  );
}

export default App;
