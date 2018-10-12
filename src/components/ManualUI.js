import React from 'react';
import styled from 'styled-components';
import Box from '@core/units/Box/Box';
import Flex from '@core/units/Flex/Flex';
import Button from './Button';
import commandsActions from '../logic/commandsActions';

const fire = () => commandsActions.fire();
const patrol = () => commandsActions.patrol();

const forward = () => commandsActions.forward();
const left = () => commandsActions.left();
const right = () => commandsActions.right();
const back = () => commandsActions.back();

const MovementButton = styled(Button)`
  padding: 16px;
  padding-left: 27px;
  padding-right: 27px;
  padding-bottom: 37px;
`;

const ActionButton = styled(Button)`
  padding: 15px;
  padding-bottom: 30px;
`;

const ManualUI = () => (
  <Box m="40px auto 0" className="btns-panel">
    <Flex m="0 75px 0 auto" w="80%" justify="space-around">
      <ActionButton onClick={patrol} type="secondary" className="button">
        Patrol
      </ActionButton>
      <ActionButton onClick={fire} type="alert" className="button">
        Fire
      </ActionButton>
    </Flex>
    <Flex mt="25px" justify="center" align="center" column className="movement-btns">
      <MovementButton className="button movement-button" onClick={forward}>
        &#8593;
      </MovementButton>
      <Flex w="265px" justify="space-between" className="vertical">
        <MovementButton className="button movement-button" onClick={left}>
          &#8592;
        </MovementButton>
        <MovementButton className="button movement-button" onClick={right}>
          &#8594;
        </MovementButton>
      </Flex>
      <MovementButton className="button movement-button" onClick={back}>
        &#8595;
      </MovementButton>
    </Flex>
  </Box>
);

export default ManualUI;
