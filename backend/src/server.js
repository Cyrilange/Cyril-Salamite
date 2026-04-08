const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const { WebSocketServer } = require('ws');
const crypto = require("crypto");
const pty = require("node-pty");

const experiences = require("./resume");

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

app.get("/experiences", (req, res) => {
  res.json(experiences);
});

server.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});