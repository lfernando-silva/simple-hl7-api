/* 

HL7 Message => <VT><MSG><FS><CR>

Where: 

VT is the charcode of from 11 (0x0b)
MSG is the message example MSH|^~\&|EPIC|EPICADT|SMS|SMSADT|199912271408|CHARRIS|ADT^A04|1817457|D|2.5|
FS is the ASCII code from 28 (0x1c)
CR is the ASCII code from 13 (0x0d)

A raw TCP should send it as buffer that contains the hex version of the string.
*/
const exampleRawMessage: string =
  "0b0b4d53487c5e7e5c267c455049437c455049434144547c534d537c3139393931323237313430387c434841525249537c4144545e4130347c313831373435377c447c322e351c0d1c0d";

/* Based on example code from http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html. */

const net = require("net");

const testClient = new net.Socket();
testClient.connect(7777, "localhost", function () {
  console.log("Connected");
  testClient.write(exampleRawMessage, "hex", () => {
    console.log("MESSAGE SENT");
  });
});

testClient.on("data", (data: any) => {
  console.log("Received: " + data);
  testClient.destroy(); // kill client after server's response
});

testClient.on("close", () => {
  console.log("Connection closed");
});
