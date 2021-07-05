import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Link to='/strict-access'>
        StrictAccess
      </Link>
      <Switch>
        <Route exact path='/users/:id' render={(props) => <Users {...props} greetingsMessage='Good Morning' />} />
        <Route path='/about' component={About} />
        <Route exact path='/' component={Home} />
        <Route exact path='/strict-access' render={() => <StrictAccess user={{username: 'joao', password: '1234'}}/>} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
