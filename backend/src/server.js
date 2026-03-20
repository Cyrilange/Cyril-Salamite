const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const { WebSocketServer } = require('ws');
const crypto = require("crypto");
const { spawn } = require("child_process");
const pty = require("node-pty");

const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const sessions = new Map();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});


wss.on("connection", (ws) => {
  const id = crypto.randomUUID();

  const shell = pty.spawn("./c_programs/minishell/minishell", [], {
    name: "xterm-color",
    cols: 80,
    rows: 30,
    cwd: process.cwd(),
    env: { ...process.env, TERM: "xterm-256color" }
  });

  sessions.set(id, { ws, shell });

  ws.send("SESSION_CREATED");

  shell.onData((data) => {
    ws.send(data);
  });

  ws.on("message", (msg) => {
    shell.write(msg.toString());
  });

  ws.on("close", () => {
    shell.kill();
    sessions.delete(id);
  });
});

server.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});