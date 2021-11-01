import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="block salmon">salmon</div>
      <div className="block blue">blue</div>
      <div className="block red">red</div>
    </div>
  );
}

export default App;
