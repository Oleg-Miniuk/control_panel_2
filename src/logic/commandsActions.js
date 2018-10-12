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

  sendDataToArduino: (data) => {
    window.bluetoothSerial.write(
      data,
      result => console.log(`sended: ${data}, status: ${result}`),
      error => console.error(`error in sending: ${data}, status: ${error}`)
    );
  },

  patrol: () => this.sendDataToArduino('9'),
  fire: () => this.sendDataToArduino('1'),
  forward: () => this.sendDataToArduino('8'),
  back: () => this.sendDataToArduino('2'),
  left: () => this.sendDataToArduino('4'),
  right: () => this.sendDataToArduino('6'),

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
            this.recordSpeech(cb);
          } else {
            window.plugins.speechRecognition.requestPermission(
              () => this.recordSpeech(cb),
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
