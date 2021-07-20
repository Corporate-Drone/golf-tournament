import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Attendees from './pages/Attendees';

import Header from './components/navigation/Header';
import './_App.scss'


function App() {
  //preload background images
  useEffect(() => {
    document.body.style.background = "url('/attendeesBackground.jpg')";
    document.body.style.background = "url('/registrationBackground.jpg')";
    document.body.style.background = "url('/homeBackground.jpg')";
  }, [])
  return (
    <div className="App">
      <HashRouter>
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
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
