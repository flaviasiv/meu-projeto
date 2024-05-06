import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'Maria'

  return (
    <div className="App">
    <SayMyName nome={nome}/>
    <Pessoa nome="Flavia" idade="30" profissao="Programador(a)" foto="https://avatars.githubusercontent.com/u/108763305?v=4"/>
    </div>
  );
}

export default App;
