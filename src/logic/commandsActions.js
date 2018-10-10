import commandsList from './commandsList';


const connectToArduino = (cb) => {
  const emelyaId = '98:D3:61:F5:C8:C3';
  window.bluetoothSerial.connect(
    emelyaId,
    (result) => {
      console.log(`connected to ${emelyaId}: ${result}`);
      cb();
    },
    error => console.error(`error in connection to device: ${error}`)
  );
};

const sendDataToArduino = (data) => {
  window.bluetoothSerial.write(
    data,
    result => console.log(`sended: ${data}, status: ${result}`),
    error => console.error(`error in sending: ${data}, status: ${error}`)
  );
};

const checkConnectionAndSend = (data) => {
  if (window.bluetoothSerial) {
    window.bluetoothSerial.isEnabled(
      () => {
        console.log('Bluetooth is enabled');
        window.bluetoothSerial.isConnected(
          () => sendDataToArduino(data),
          connectToArduino(() => sendDataToArduino(data))
        );
      },
      () => {
        console.log('Bluetooth is not enabled');
      }
    );
  } else {
    console.log('no bluetoothwindow.bluetoothSerial');
  }
};

const commandsActions = {
  checkCommand(command) {
    const commandKey = Object.keys(commandsList).filter(
      commandItem => command.indexOf(commandItem) !== -1
    )[0];
    if (commandKey) {
      this[commandsList[commandKey]]();
    }
  },
  patrol: () => console.log('patrol'),
  fire: () => {
    // checkConnectionAndSend('1');
    sendDataToArduino('1');
  }
};

export default commandsActions;
