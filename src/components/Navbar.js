import logo from './logo.svg';
import './App.css';

function Navbar() {
  return (
    
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">Navbar</a>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>

  );
}

export default Navbar;
/* 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
