import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (

    <div className="body">
      <p>
        Hello, World!

        I am a simple <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> app.

        I am running on <a className="App-link" href="https://developers.cloudflare.com/workers/get-started/guide" target="_blank" rel="noopener noreferrer">Cloudflare Workers</a>.

      </p>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> Serverless React app
      </header>

      <Example />
    </div>



  );
}

export default App;
