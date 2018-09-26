
const commandsActions = {
  checkCommand(command) {
    const commandsList = Object.keys(this.commands);
    const commandKey = commandsList.filter(commandItem => command.indexOf(commandItem) !== -1)[0];
    if (commandKey) {
      this.commands[commandKey]();
    }
  },
  commands: {
    патруль: () => console.log('patrol')
  }
};

export default commandsActions;
