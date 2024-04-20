import logo from "./logo.svg";
import { User, SecondUser } from "./User";
import Form from "./Form";
import "./App.css";
import Data from "./Data";

function App() {
  const name = "Matt";
  const age = 29;

  const clickMe = () => {
    console.log("I got clicked!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Data />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Form />
        {/* <User name={name} age={age} onClickHandler={clickMe} />
        <SecondUser /> */}
      </header>
    </div>
  );
}

export default App;
