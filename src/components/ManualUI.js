import React from 'react';
import { Button } from 'arwes';

const ManualUI = () => (
  <div className="btns-panel">
    <div className="action-btns">
      <Button animate layer="secondary" className="button">
        Patrol
      </Button>
      <Button animate layer="alert" className="button">
        Fire
      </Button>
    </div>
    <div className="movement-btns center">
      <Button animate className="button">
        &#8592;
      </Button>
      <div className="center vertical">
        <Button animate className="button center">
          &#8593;
        </Button>
        <Button animate className="button">
          &#8595;
        </Button>
      </div>
      <Button animate className="button">
        &#8594;
      </Button>
    </div>
  </div>
);

export default ManualUI;
