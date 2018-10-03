import React from 'react';
import Box from '@core/units/Box/Box';
import Flex from '@core/units/Flex/Flex';
import Button from './Button';

const ManualUI = () => (
  <Box m="60px auto" className="btns-panel">
    <Flex m="0 auto" w="80%" justify="space-around">
      <Button animate type="secondary" className="button">
        Patrol
      </Button>
      <Button animate type="alert" className="button">
        Fire
      </Button>
    </Flex>
    <Flex mt="20px" justify="center" align="center" column className="movement-btns">
      <Button animate className="button movement-button">
        &#8593;
      </Button>
      <Flex
        w="210px"
        justify="space-between"
        className="vertical"
      >
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
