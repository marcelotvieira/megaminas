/* eslint-disable react/no-array-index-key */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { providers } from '../data/data';

export default class Providers extends Component {
  state = {
    search: '',
    results: [],
    isLoading: false,
    isButtonDisabled: true,
  };

  componentDidUpdate() {
    this.validateSearch();
  }

  validateSearch = () => {
    const { search, isButtonDisabled } = this.state;
    const isValid = search.length >= 3;
    if (isValid === isButtonDisabled) return this.setState({ isButtonDisabled: !isValid });
    return null;
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  providerSearchByName = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const { search } = this.state;
    const results = providers.filter((provider) => provider.title.includes(
      search.charAt(0).toUpperCase() + search.slice(1),
    ));
    if (search.length < 3) {
      return this.setState({ isLoading: false });
    }
    return setTimeout(() => {
      this.setState({ results, isLoading: false });
    }, 1000);
  };

  render() {
    const {
      search, results, isLoading, isButtonDisabled,
    } = this.state;
    return (
      <div className="providers-page">
        <div className="page-container">
          <h2>Conheça aqui nossos parceiros</h2>
          <form onSubmit={this.providerSearchByName} action="" className="search-provider">
            <div className="search-box">
              <input name="search" value={search} type="text" onChange={this.onInputChange} />
              <button type="button" disabled={isButtonDisabled} onClick={this.providerSearchByName}>
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </form>
          {isLoading && <ReactLoading className="loading" type="spinningBubbles" color="#151C7E" width={40} heigth={40} />}
          <div className="providers-container">
            { results.length >= 1 && (
              <div className="search-result-container">
                {results.map((provider, index) => (
                  <div key={index}>
                    <div className="provider-card">
                      <img src={provider.image} alt="" className="provider-card-image" />
                    </div>
                    <h3>{provider.title}</h3>
                  </div>
                ))}
              </div>
            )}
            {providers.map((provider, index) => (
              <div key={index}>
                <div className="provider-card">
                  <img src={provider.image} alt="" className="provider-card-image" />
                </div>
                <h3>{provider.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
