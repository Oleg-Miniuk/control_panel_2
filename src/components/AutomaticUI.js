import React from 'react';
import Flex from '@core/units/Flex/Flex';
import styled from 'styled-components';
import Microphone from './Microphone';

const Wrapper = styled(Flex).attrs({
  justify: 'center',
  m: '130px 57px 0 0',
  height: '80%'
})``;

class AutomaticUI extends React.Component {
  componentDidMount() {
    const speechRecognition = window.plugins
    && window.plugins.speechRecognition ? window.plugins.speechRecognition : null;
    if (speechRecognition) {
      // console.log('speechRecognition');
      // window.plugins.speechRecognition.hasPermission(() => console.log('has permission'), () => {
      // console.log('no permission');
      // console.log(speechRecognition.hasPermission());
      // speechRecognition.requestPermission(this.startListening, error => console.error(error));
      this.startListening();
    } else {
      console.log('no speechRecognition');
    }
  }

  startListening = () => {
    console.log('start listening');
    const options = {
      language: 'ru-RU',
    };
    window.plugins.speechRecognition.startListening(
      list => console.log(list),
      error => console.error(error),
      options
    );
  };

  render() {
    return (
      <Wrapper>
        <Microphone />
      </Wrapper>
    );
  }
}

export default AutomaticUI;
