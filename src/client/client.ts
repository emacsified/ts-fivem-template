import { config } from 'process';

setImmediate(() => {
  emitNet('helloserver');
});

onNet('helloclient', message => {
  console.log(`The server replied: ${message}`);
});

let isOpen = false;

const toggleUI = () => {
  isOpen = !isOpen;
  SetNuiFocus(false, isOpen);
  const msg = { type: 'UIToggle', action: 'toggle' };
  const msgString = JSON.stringify(msg);
  SendNuiMessage(msgString);
};

setTick(() => {
  if (IsControlJustReleased(0, 29)) {
    toggleUI();
  }
  if (IsControlJustReleased(0, 20) && isOpen) {
    toggleUI();
  }
});
