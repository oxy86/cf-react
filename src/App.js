import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, World!

          I am a simple <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> app.
          
          I am running on <a className="App-link" href="https://developers.cloudflare.com/workers/get-started/guide" target="_blank" rel="noopener noreferrer">Cloudflare Workers</a>.
          
        </p>
        
      </header>
    </div>
  );
}

export default App;
