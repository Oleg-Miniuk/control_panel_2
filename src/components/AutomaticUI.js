import React from 'react';
import Flex from '@core/units/Flex/Flex';
import styled from 'styled-components';
// import microphone from '../../public_common/microphone2.png';
import Microphone from './Microphone';

const Wrapper = styled(Flex).attrs({
  justify: 'center',
  mt: '119px',
  height: '80%'
})``;

const AutomaticUI = () => (
  <Wrapper>
    <Microphone />
  </Wrapper>
);

export default AutomaticUI;
