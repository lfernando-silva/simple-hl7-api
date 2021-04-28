const exampleRawMessage: string =
  "0b0b4d53487c5e7e5c267c455049437c455049434144547c534d537c3139393931323237313430387c434841525249537c4144545e4130347c313831373435377c447c322e351c0d1c0d";

/* Or use this example tcp client written in node.js.  (Originated with 
example code from 
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */

const net = require("net");

const testClient = new net.Socket();
testClient.connect(7777, "localhost", function () {
  console.log("Connected");
  testClient.write(exampleRawMessage, 'hex', () => {
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
