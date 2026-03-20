const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:5000");

ws.on("open", () => {
  console.log("connecté");

  ws.send("ls\n");
});

ws.on("message", (data) => {
  console.log("reçu:", data.toString());
});