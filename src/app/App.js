import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import Search from '../Search';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <NavLink exact activeClassName='active-link' to="/">Search</NavLink>
          </header>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Search {...routerProps}/>
                )}
              />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

