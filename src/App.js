import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import NoMatch from './Components/Header/NoMatch/NoMatch';
import Home from './Components/Header/Home/Home';
import SingleTeam from './Components/SingleTeam/SingleTeam';

function App() {
  return (
    <div>
         <Router>
           <Header></Header>
           <Switch>
             <Route path="/home">
                <Home></Home>
             </Route>
             <Route path="/team/:teamId">
                <SingleTeam></SingleTeam>
             </Route>
             <Route exact path="/">
                <Home></Home>
             </Route>
             <Route path="*">
                <NoMatch></NoMatch>
             </Route>
           </Switch>
         </Router>
    </div>
  );
}

export default App;
