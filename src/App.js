import logo from './Gruss_vom_Krampus.jpg';
import './App.css';
import ComponentButton from './components/ComponentButton';
import ComponentUl from './components/ComponentUl';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='Auguri'>
          Cattivo Natale.
        </p>
      <ComponentButton content='Cliccami'
      className='button1'/>
      <ComponentUl className='antiNatale'/>

      </header>
    </div>
  );
}

export default App;
