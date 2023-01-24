import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
    <NavBar/>
      <Header/>
    </div>
  );
}

export default App;
