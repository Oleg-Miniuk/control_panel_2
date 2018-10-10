import React, { Component } from 'react';
import '../styles/styles.css';
import '../styles/Electrolize-Regular.ttf';

import App from './App';

class Launcher extends Component {
  componentDidMount() {
    if (process.env.cordova) {
      window.screen.orientation.lock('landscape-primary');
    }
  }

  render() {
    return (
      <App />
    );
  }
}

export default Launcher;
