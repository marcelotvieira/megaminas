/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Providers from './pages/Providers';
import NotFound from './pages/NotFound';
import sendConfirmation from './pages/sendConfirmation';
import Register from './pages/Register';
import './global.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
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
