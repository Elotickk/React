import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Padre from './components/Padre/Padre';
import Boton from './components/Boton/Boton'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ItemListContainer saludo="Hola desafio de coder numero 3"/>
        <Padre>
          <div>
            <h2>Soy el children</h2>
            <h2>Soy brother de children</h2>
          </div>
        </Padre>
        <Boton/>
      </header>
    </div>
  );
}

export default App;
