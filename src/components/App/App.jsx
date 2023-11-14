import Header from "../Header/Header";
import Home from "../Home/Home";
import Agents from "../Agents/Agents";
import Weapons from "../Weapons/Weapons";
import Maps from "../Maps/Maps";
import Footer from "../Footer/Footer";

import {
  // Redirect,
  Route,
  Switch,
} from "react-router-dom";

export default function App(props) {
  return (
    <>
      
      <div className="app">
        <Header title="Valorant Wiki" />
        <div className="page">
          <Switch>
            <Route path='/agents'>
              <Agents />
            </Route>

            <Route path='/weapons'>
              <Weapons />
            </Route>
            
            <Route path='/maps'>
              <Maps />
            </Route>

            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
      
    </>
  );
}
