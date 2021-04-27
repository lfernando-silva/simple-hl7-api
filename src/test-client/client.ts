const hl7Client = require('simple-hl7');

const client = hl7Client.Server.createTcpClient('localhost', 7777);

//create a message
const msg: any = new hl7Client.Message(
  "EPIC",
  "EPICADT",
  "SMS",
  "199912271408",
  "CHARRIS",
  ["ADT", "A04"], //This field has 2 components
  "1817457",
  "D",
  "2.5"
);

console.log('******sending message*****')
client.send(msg, function (err: Error, ack: any) {
  console.log('******ack received*****')
  console.log(ack.log());
});