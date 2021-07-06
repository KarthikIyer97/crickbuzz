import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Navbar'
import Countries from './Countries'
import Teams from './Teams'
import IndiaProfile from './IndiaProfile'
import EnglandProfile from './EnglandProfile'
import Venue from './Venue'
import Matches from './Matches'
import Summary from './Summary'
import Result from './Result'
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
  <Navbar />
        <Switch>
        <Route exact path="/" component={Countries} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/india" component={IndiaProfile} />
        <Route exact path="/england" component={EnglandProfile} />
        <Route exact path="/venue" component={Venue} />
        <Route exact path="/matches" component={Matches} />
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/result" component={Result} />
        <Redirect to="/" /> 
        </Switch>
    </div>
  );
}

export default App;
