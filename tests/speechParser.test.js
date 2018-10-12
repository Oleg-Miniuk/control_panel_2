import commandsActions from '../src/logic/commandsActions';

const speechList = ['падруль', 'патруль', 'руль'];

test('finding command in common commandsList', () => {
  expect(commandsActions.getCommandKey(speechList)).toBe('patrol');
});
