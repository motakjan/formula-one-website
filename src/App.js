import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import { Schedule } from "./components/Schedule/Schedule";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { PageTransitionWrapper } from "./components/UI/PageTransitionWrapper/PageTransitionWrapper";
import { MainPage } from "./components/MainPage/MainPage";
import { Footer } from "./components/Footer/Footer";
import { Teams } from "./components/Teams/Teams";
import { Results } from "./components/Results/Results";
import { Drivers } from "./components/Drivers/Drivers";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
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
        <Route path="/results/:track">
          <PageTransitionWrapper>
            <Results />
          </PageTransitionWrapper>
        </Route>
        <Route path="/rankings/drivers">
          <PageTransitionWrapper>
            <Drivers />
          </PageTransitionWrapper>
        </Route>
        <Route path="/rankings/constructors">
          <PageTransitionWrapper>
            <Teams />
          </PageTransitionWrapper>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer key="footer-key" />
    </AnimatePresence>
  );
}

export default App;
