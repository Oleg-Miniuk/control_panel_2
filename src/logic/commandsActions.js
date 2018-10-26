import commandsList from './commandsList';

const commandsActions = {
  connectToArduino: (cb) => {
    const emelyaId = '98:D3:61:F5:C8:C3';
    const { bluetoothSerial: Serial } = window;
    if (Serial) {
      Serial.connect(
        emelyaId,
        (result) => {
          console.log(`connected to ${emelyaId}: ${result}`);
          window.bluetoothSerial.subscribe(
            '\n',
            (receivedData) => {
              console.log(`received data: ${receivedData}`);
            },
            receivingError => console.error(`error in receiving data: ${receivingError}`)
          );
          if (cb && typeof cb === 'function') {
            cb();
          }
        },
        error => console.error(`error in connection to device: ${error}`)
      );
    } else {
      console.log('no bluetoothSerial module');
    }
  },

  unsubscribe: () => {
    window.bluetoothSerial.unsubscribe(
      (result) => {
        console.log(`unsubscribed : ${result}`);
      },
      error => console.error(`error in unsubscribing: ${error}`)
    );
  },

  sendDataToArduino: (data) => {
    window.bluetoothSerial.write(
      data,
      result => console.log(`sended: ${data}, status: ${result}`),
      error => console.error(`error in sending: ${data}, status: ${error}`)
    );
  },

  patrol: () => commandsActions.sendDataToArduino('7'),
  fire: () => commandsActions.sendDataToArduino('9'),
  forward: () => commandsActions.sendDataToArduino('5'),
  back: () => commandsActions.sendDataToArduino('2'),
  left: () => commandsActions.sendDataToArduino('1'),
  right: () => commandsActions.sendDataToArduino('3'),
  stop: () => commandsActions.sendDataToArduino('0'),

  recordSpeech: (cb) => {
    const options = {
      language: 'ru-RU'
    };
    window.plugins.speechRecognition.startListening(
      (list) => {
        console.log(list);
        const commandKey = commandsActions.getCommandKey(list);
        if (commandKey) {
          commandsActions[commandKey]();
        }
        cb();
      },
      error => console.error(error),
      options
    );
  },

  listen: (cb) => {
    console.log('start listening');
    try {
      window.plugins.speechRecognition.hasPermission(
        (hasPermission) => {
          if (hasPermission) {
            commandsActions.recordSpeech(cb);
          } else {
            window.plugins.speechRecognition.requestPermission(
              () => commandsActions.recordSpeech(cb),
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
  },

  getCommandKey: (list) => {
    const commandsArray = Object.keys(commandsList);
    for (let index = 0; index < commandsArray.length; index += 1) {
      if (list.some(speechListItem => speechListItem.indexOf(commandsArray[index]))) {
        return commandsList[commandsArray[index]];
      }
    }
    return null;
  }
};

export default commandsActions;
