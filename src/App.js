import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div className="App">
    <NavBar/>
      <Header/>
      <SearchBar/>
    </div>
  );
}

export default App;
