import React from 'react';
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

const ManualUI = () => (
  <Box m="60px auto" className="btns-panel">
    <Flex m="0 auto" w="80%" justify="space-around">
      <Button onClick={patrol} type="secondary" className="button">
        Patrol
      </Button>
      <Button onClick={fire} type="alert" className="button">
        Fire
      </Button>
    </Flex>
    <Flex
      mt="20px"
      justify="center"
      align="center"
      column
      className="movement-btns"
    >
      <Button className="button movement-button" onClick={forward}>
        &#8593;
      </Button>
      <Flex w="210px" justify="space-between" className="vertical">
        <Button className="button movement-button" onClick={left}>
          &#8592;
        </Button>
        <Button className="button movement-button" onClick={right}>
          &#8594;
        </Button>
      </Flex>
      <Button className="button movement-button" onClick={back}>
        &#8595;
      </Button>
    </Flex>
  </Box>
);

export default ManualUI;
