/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
// import Products from './pages/Products';
import './global.css';
import NotFound from './pages/NotFound';
import Providers from './pages/Providers';
import Register from './pages/Register';
import sendConfirmation from './pages/sendConfirmation';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/products" component={Products} /> */}
          <Route exact path="/providers" component={Providers} />
          <Route exact path="/contact" component={Register} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/sendConfirmation" component={sendConfirmation} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
