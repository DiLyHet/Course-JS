'use strict';
let text = 'Just learn it';

export function sendMessage(name) {
  return `${name}, ${text}! Your Gromcode`;
};

export function setMessage(text) {
  return sendMessage(name);
};

console.log(sendMessage('Ann'));