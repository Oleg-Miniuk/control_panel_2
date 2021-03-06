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

const stop = () => commandsActions.stop();

const MovementButton = styled(Button)`
  padding: 13px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 34px;
`;

const ActionButton = styled(Button)`
  padding: 12px;
  padding-bottom: 27px;
`;

const ManualUI = () => (
  <Box m="30px auto 0" className="btns-panel">
    <Flex m="0 75px 0 auto" w="80%" justify="space-around">
      <ActionButton onClick={patrol} type="secondary" className="button">
        Patrol
      </ActionButton>
      <ActionButton onClick={fire} type="alert" className="button">
        Fire
      </ActionButton>
    </Flex>
    <Flex mt="15px" justify="center" align="center" column className="movement-btns">
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
    <Flex justify="flex-end" pr="50px">
      <ActionButton onClick={stop} type="info" className="button">
        Stop
      </ActionButton>
    </Flex>
  </Box>
);

export default ManualUI;
