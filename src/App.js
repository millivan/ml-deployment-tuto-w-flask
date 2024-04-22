import logo from "./logo.svg";
import Form from "./Form";
import "./App.css";

function App() {
  // const name = "Matt";
  // const age = 29;

  // const clickMe = () => {
  //   console.log("I got clicked!");
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
      </header>
    </div>
  );
}

export default App;
