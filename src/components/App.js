import React, { Component } from 'react';
import { Arwes, Button, Heading } from 'arwes';
import ManualUI from './ManualUI';
import AutomaticUI from './AutomaticUI';
import commandsActions from '../logic/commandsActions';

const background = 'https://i.pinimg.com/originals/d7/8d/40/d78d4069da54ade6085b7d540cfde597.jpg';
class App extends Component {
  state = {
    mode: 'manual'
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.mode !== 'automatic' && this.state.mode === 'automatic') {
      this.listenToSpeech();
    }
  }

  listenToSpeech = () => {
    const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognitionConstructor();
    recognition.lang = 'ru-RU';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (e) => {
      console.log(e.results);
      const command = e.results[e.results.length - 1][0].transcript;
      console.log(command);
      commandsActions.checkCommand(command);
      setTimeout(this.listenToSpeech, 0);
    };
    recognition.onspeechend = () => {
      console.log('end recognition');
      recognition.stop();
    };
    recognition.onerror = (event) => {
      console.log(
        event.error
      );
      setTimeout(this.listenToSpeech, 0);
    };
    console.log('start recognition');
    recognition.start();
  };

  setMode = mode => this.setState({ mode });

  setAutomatic = () => this.setMode('automatic');

  setManual = () => this.setMode('manual');

  getBtnsProps = type => this.state.mode === type ? { layer: 'success' } : { disabled: false };


  render() {
    const { mode } = this.state;
    return (
      <Arwes background={background}>
        <div className="center btns-checker">
          <div className="btns-checker__header">
            <Heading node="h4">
mode:
              {' '}
              {mode}
            </Heading>
          </div>
          <Button
            {...this.getBtnsProps('automatic')}
            onClick={this.setAutomatic}
          >
            Automatic
          </Button>
          <Button
            {...this.getBtnsProps('manual')}
            style={{ width: '110px' }}
            onClick={this.setManual}
          >
            Manual
          </Button>
        </div>
        {mode === 'automatic' ? <AutomaticUI /> : <ManualUI />}
      </Arwes>
    );
  }
}

export default App;
