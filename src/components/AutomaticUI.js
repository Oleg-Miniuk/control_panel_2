import React from 'react';
import Flex from '@core/units/Flex/Flex';
import styled from 'styled-components';
import microphone from '../../public_common/microphone2.png';

const Wrapper = styled(Flex).attrs({
  justify: 'center',
  mt: '99px',
  height: '80%'
})``;

const ImageBackground = styled(Flex)`
  background: white;
  width: 50px;
  border-radius: 100%;
  height: 49px;
  position: relative;
`;

const AutomaticUI = () => (
  <Wrapper>
    <ImageBackground>
      <img width="50px" alt="microphone icon" src={microphone} />
    </ImageBackground>
  </Wrapper>
);

export default AutomaticUI;
