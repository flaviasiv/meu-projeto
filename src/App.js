import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const nome = 'Maria'

  return (
    <div className="App">
      <Frase />
      <Frase />
      <Pessoa nome="Flavia" idade="30" profissao="Programador(a)" foto="https://avatars.githubusercontent.com/u/108763305?v=4"/>
    </div>
  );
}

export default App;
