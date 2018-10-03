import React from 'react';
import Box from '@core/units/Box/Box';
import Flex from '@core/units/Flex/Flex';
import Button from './Button';

const ManualUI = () => (
  <Box className="btns-panel">
    <Flex justify="space-around" className="action-btns">
      <Button animate type="secondary" className="button">
        Patrol
      </Button>
      <Button animate type="alert" className="button">
        Fire
      </Button>
    </Flex>
    <Flex justify="center" align="center" column className="movement-btns">
      <Button animate className="button movement-button">
        &#8593;
      </Button>
      <Flex justify="center" className="vertical">
        <Button animate className="button movement-button">
          &#8592;
        </Button>
        <Button animate className="button movement-button">
          &#8594;
        </Button>
      </Flex>
      <Button animate className="button movement-button">
        &#8595;
      </Button>
    </Flex>
  </Box>
);

export default ManualUI;
