// import logo from './logo.svg';
import './App.css';
// import Zoom from 'react-reveal/Zoom';
import About from './components/About/About';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">

      {/*<Zoom>/!*Using Zoom Effect*!/*/}
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      {/*</Zoom>*/}
      <About />
      <Menu />
    </div>
  );
}

export default App;
