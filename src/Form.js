import React, { Component } from 'react';
import parse from 'hipchat-parser';
import Loader from './Loader';
import Json from './Json';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: {
        mentions: [],
        emoticons: [],
        urls: [],
      },
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    this.setState({
      loading: true,
    }, () => {
      parse(this.state.value)
        .then((p) => {
          this.setState({
            loading: false,
            data: p,
          });
        })
        .catch(() => {
          this.setState({ loading: false, data: 'website does not exist' });
        });
    });
    e.preventDefault();
  }
  render() {
    return (
      <div className="splash-container">
        <form className="splash" onSubmit={this.handleSubmit}>
          <p className="splash-subhead">
            <a href="https://github.com/jmarthernandez/chat-parser">
              Parsing code
            </a>
            &nbsp;is imported from npm. UI source code is hosted&nbsp;
            <a href="https://github.com/jmarthernandez/chat-parser">
              here
            </a>
            .
          </p>
          <input
            className="splash-input"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <p>
            <button
              type="submit"
              className="pure-button pure-button-primary"
            >
              Parse
            </button>
          </p>
          {this.state.loading
            ? <Loader />
            : <Json data={this.state.data} />
          }
        </form>
      </div>
    );
  }
}
