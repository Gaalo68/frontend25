import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/auth/Login";
import Registro from "./components/auth/Registro";
import Proyectos from "./components/proyect/Proyectos";

const App = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/registro" component={Registro}></Route>
      <Route exact path="/proyectos" component={Proyectos}></Route>
    </Switch>
  </Router>
  );
}

export default App;
