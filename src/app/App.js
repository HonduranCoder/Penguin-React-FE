import { Component } from 'react';
// import Header from './Header';
import Footer from './Footer';
// import Home from '../home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import Search from '../Search';
import './App.css';
import SignUp from '../SignUp';

const TOKEN_KEY = 'TOKEN';

export default class App extends Component {

  state ={
    token: localStorage.getItem(TOKEN_KEY) || ''
  }

  handleTokenChange = token => {
    localStorage.setItem(TOKEN_KEY, token);
    this.setState({ token: token });
  }


  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <NavLink exact activeClassName='active-link' to="/">Search</NavLink>
            <NavLink exact activeClassName='active-link' to="/signup">Sign Up</NavLink>
          </header>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Search {...routerProps}/>
                )}
              />

              <Route path="/signup" exact={true}
                render={routerProps => (
                  <SignUp handleTokenChange={this.handleTokenChange} {...routerProps}/>
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

