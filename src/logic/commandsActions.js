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

const recordSpeech = (cb) => {
  const options = {
    language: 'ru-RU'
  };
  window.plugins.speechRecognition.startListening(
    (list) => {
      console.log(list);
      cb();
    },
    error => console.error(error),
    options
  );
};

const commandsActions = {
  patrol: () => sendDataToArduino('9'),
  fire: () => sendDataToArduino('1'),
  forward: () => sendDataToArduino('8'),
  back: () => sendDataToArduino('2'),
  left: () => sendDataToArduino('4'),
  right: () => sendDataToArduino('6'),

  listen: (cb) => {
    console.log('start listening');
    try {
      window.plugins.speechRecognition.hasPermission(
        (hasPermission) => {
          if (hasPermission) {
            recordSpeech(cb);
          } else {
            window.plugins.speechRecognition.requestPermission(
              () => recordSpeech(cb),
              (err) => {
                throw err;
              }
            );
          }
        },
        (err) => {
          throw err;
        }
      );
    } catch (error) {
      console.error(`error in speechRecognition ${error}`);
    }
  }
};

const checkCommand = (command) => {
  const commandKey = Object.keys(commandsList).filter(
    commandItem => command.indexOf(commandItem) !== -1
  )[0];
  if (commandKey) {
    commandsActions[commandsList[commandKey]]();
  }
};

export default commandsActions;
