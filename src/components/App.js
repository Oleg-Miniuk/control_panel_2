import React, { Component } from 'react';
import styled from 'styled-components';
import Box from '@core/units/Box/Box';
import Flex from '@core/units/Flex/Flex';
import ManualUI from './ManualUI';
import AutomaticUI from './AutomaticUI';
// import commandsActions from '../logic/commandsActions';
import backgroundHud from '../../public_common/hud_back.jpg';
import Button from './Button';
import commandsActions from '../logic/commandsActions';

const Background = styled(Box)`
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100vw;
  max-height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const ModeTitle = styled.h4`
  color: rgb(161, 236, 251);
  display: block;
  font-family: Electrolize, sans-serif;
  font-size: 18px;
  font-weight: 700;
  height: 27px;
  line-height: 27px;
  text-shadow: rgba(161, 236, 251, 0.65) 0px 0px 4px;
  text-transform: uppercase;
  transition-delay: 0s;
  transition-duration: 0.25s;
  transition-property: color;
  transition-timing-function: ease-out;
  margin-right: 40px;
`;


class App extends Component {
  state = {
    mode: 'manual',
    connected: false
  };

  componentDidMount() {
    const emelyaId = '98:D3:61:F5:C8:C3';
    const { bluetoothSerial: Serial } = window;
    Serial.connect(
      emelyaId,
      (result) => {
        console.log(`connected to ${emelyaId}: ${result}`);
      },
      error => console.error(`error in connection to device: ${error}`)
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { mode } = this.state;
    if (prevState.mode !== 'automatic' && mode === 'automatic') {
      // this.listenToSpeech();
    }
  }

  listenToSpeech = () => {
    console.log('listen');
  };

  setAutomatic = () => this.setState({ mode: 'automatic' }, commandsActions.listen);

  setManual = () => this.setState({ mode: 'manual' });

  getBtnsProps = (type) => {
    const { mode } = this.state;
    return mode === type ? { layer: 'success' } : { disabled: false };
  };

  render() {
    const { mode } = this.state;
    return (
      <Background>
        <BackgroundImage src={backgroundHud} />
        <Flex
          pt="20px"
          justify="center"
          align="center"
          className="btns-checker"
        >
          <Box className="btns-checker__header">
            <ModeTitle>
mode:
              {' '}
              {mode}
            </ModeTitle>
          </Box>
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
        </Flex>
        {mode === 'automatic' ? <AutomaticUI /> : <ManualUI />}
      </Background>
    );
  }
}

export default App;
