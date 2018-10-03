import React from 'react';
import Flex from '@core/units/Flex/Flex';
import styled from 'styled-components';
import Microphone from './Microphone';

const Wrapper = styled(Flex).attrs({
  justify: 'center',
  m: '130px 57px 0 0',
  height: '80%'
})``;

const AutomaticUI = () => (
  <Wrapper>
    <Microphone />
  </Wrapper>
);

export default AutomaticUI;
