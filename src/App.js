import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import { Schedule } from "./components/Schedule/Schedule";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <div className="block salmon">salmon</div>
          <div className="block white">blue</div>
          <div className="block red">red</div>
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/rankings/drivers">
          <div className="block red">rankings/drivers</div>
        </Route>
        <Route path="/rankings/constructors">
          <div className="block red">rankings/constructors</div>
        </Route>
        <Route path="/teams">
          <div className="block red">Teams</div>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
