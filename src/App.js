import logo from './logo.svg';
import './App.css';
import SampleComponent from './components/sample-component/SampleComponent'

function App() {
  const actionHandler1 = (arg) => {
    console.log('ActionHandler1: ', arg);
  }

  const actionHandler2 = (arg) => {
    console.log('ActionHandler2: ', arg);
  }

  // console.log('SampleComponent in App: ', SampleComponent({}));
  // console.log('SampleComponent in App: ', SampleComponent);
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
        <SampleComponent handleAction1={actionHandler1} handleAction2={actionHandler2} />
      </header>
    </div>
  );
}

export default App;
