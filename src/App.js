import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import { Schedule } from "./components/Schedule/Schedule";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { PageTransitionWrapper } from "./components/UI/PageTransitionWrapper/PageTransitionWrapper";
import { MainPage } from "./components/MainPage/MainPage";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="App">
        <Navbar />
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <PageTransitionWrapper>
              <MainPage />
            </PageTransitionWrapper>
          </Route>
          <Route path="/schedule">
            <PageTransitionWrapper>
              <Schedule />
            </PageTransitionWrapper>
          </Route>
          <Route path="/rankings/drivers">
            <PageTransitionWrapper>
              <div className="block red">rankings/drivers</div>
            </PageTransitionWrapper>
          </Route>
          <Route path="/rankings/constructors">
            <PageTransitionWrapper>
              <div className="block red">rankings/constructors</div>
            </PageTransitionWrapper>
          </Route>
          <Route path="/teams">
            <PageTransitionWrapper>
              <div className="block red">Teams</div>
            </PageTransitionWrapper>
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </AnimatePresence>
  );
}

export default App;
