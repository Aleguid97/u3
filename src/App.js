import "bootstrap/dist/css/bootstrap.min.css";
import logo from './Gruss_vom_Krampus.jpg';
import './App.css';
import ComponentCard from './components/ComponentCard';
import MyNavbar from "./components/ComponentNav"; 
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <MyNavbar/>
      </header>
      <>
      <ComponentCard/>
      <ComponentCard/>
      </>
      <footer className="container">
        <MyFooter/>

      </footer>
      
    </div>
  );
}

export default App;
