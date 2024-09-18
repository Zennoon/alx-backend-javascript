#!/usr/bin/node

// Function that prints given string arg to STDOUT
const displayMessage = (message) => {
  process.stdout.write(message);
};

module.exports = displayMessage;
