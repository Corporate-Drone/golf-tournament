import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Attendees from './pages/Attendees';

import Header from './components/navigation/Header';
import './_App.scss'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/attendees" exact>
            <Attendees />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
