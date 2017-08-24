import React, { Component } from 'react';

const LOADING_TEXT = 'PARSING';

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = { indicator: LOADING_TEXT };
    this.initIndicator = this.initIndicator.bind(this);
  }

  initIndicator() {
    setTimeout(() => {
      const { indicator } = this.state;
      if (indicator.length === 13) {
        this.setState({ indicator: LOADING_TEXT });
      } else {
        this.setState({ indicator: `${indicator}${'.'}` });
      }
    }, 500);
  }

  render() {
    this.initIndicator();
    return (
      <pre className="json">
        {this.state.indicator}
      </pre>
    );
  }
}
