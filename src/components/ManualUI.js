import React from 'react';
import Box from '@core/units/Box/Box';
import Flex from '@core/units/Flex/Flex';
import Button from './Button';
import commandsActions from '../logic/commandsActions';

const onClick1 = () => {
  commandsActions.fire();
};

const onClick2 = () => {
  console.log('start listening');
  const options = {
    language: 'ru-RU'
  };
  window.plugins.speechRecognition.startListening(
    list => console.log(list),
    error => console.error(error),
    options
  );
};

const ManualUI = () => (
  <Box m="60px auto" className="btns-panel">
    <Flex m="0 auto" w="80%" justify="space-around">
      <Button onClick={onClick2} type="secondary" className="button">
        Patrol
      </Button>
      <Button onClick={onClick1} type="alert" className="button">
        Fire
      </Button>
    </Flex>
    <Flex mt="20px" justify="center" align="center" column className="movement-btns">
      <Button className="button movement-button">&#8593;</Button>
      <Flex w="210px" justify="space-between" className="vertical">
        <Button className="button movement-button">&#8592;</Button>
        <Button className="button movement-button">&#8594;</Button>
      </Flex>
      <Button className="button movement-button">&#8595;</Button>
    </Flex>
  </Box>
);

export default ManualUI;
