import React from 'react';
import ReactDOM from 'react-dom';
import Launcher from './components/Launcher';

const runApp = () => {
  ReactDOM.render(<Launcher />, document.getElementById('root'));
};

if (process.env.cordova) {
  document.addEventListener('deviceready', runApp);
} else {
  runApp();
}
